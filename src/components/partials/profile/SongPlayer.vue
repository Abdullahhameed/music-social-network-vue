<template>
    <div class="bg-green-500 rounded">
        <div id="aplayer"></div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import APlayer from 'aplayer';
import 'aplayer/dist/APlayer.min.css';
import { useSongStore } from '@/store/song-store';

const songStore = useSongStore();

let songsList = []

onMounted(() => {
    mapSongs()
    thePlayer()
})

const mapSongs = () => {
    let newSongs = songStore.songs.map(function(song) {
        return {
            name: songStore.title,
            artist: songStore.artistName,
            url: process.env.VUE_APP_API_URL + 'songs/' + songStore.artistId + '/' + song.song
        }
    });
    
    for (let i = 0; i < newSongs.length; i++) {
        songsList.push(newSongs[i]); 
    }
}

const thePlayer = () => {
    new APlayer({
        container: document.getElementById('aplayer'),
        audio: songsList
        // audio: [
        //     {
        //         name: 'First Song',
        //         artist: 'artist',
        //         url: '/music/cinematic-time-lapse-115672.mp3',
        //         cover: 'cover.jpg'
        //     },
        //     {
        //         name: 'Second Song',
        //         artist: 'artist',
        //         url: '/music/waterfall-140894.mp3',
        //         cover: 'cover.jpg'
        //     },
        // ]
    });
}
</script>