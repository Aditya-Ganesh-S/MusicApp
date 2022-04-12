import Home from '@/views/Home.vue';
import SongItem from '@/components/SongItem.vue';
import { shallowMount } from '@vue/test-utils';

jest.mock('@/includes/firebase', ()=>{});

describe('Home.vue', ()=>{
    test('renders list of songs', ()=>{
        const songs = [
            {}, {}, {}
        ];

        Home.methods.getSongs = () => false;

        const wrapper = shallowMount(Home, {
            data(){
                return {
                    songs,
                }
            }
        });

        const songItems = wrapper.findAllComponents(SongItem);
        expect(songItems).toHaveLength(songs.length);
    })
})