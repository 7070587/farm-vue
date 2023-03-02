<template>
    <div>
        <div style="display:flex;">
            <div id="video_0">
                <video
                    id="video0"
                    class="video-js vjs-big-play-centered"
                    style="margin-right:10px; width: 640px; height: 360px;"
                ></video>
            </div>

            <div>
                <video
                    id="video1"
                    class="video-js vjs-big-play-centered"
                >
                </video>
            </div>

        </div>

        <div style="display:flex; margin-top:10px;">
            <video
                id="video2"
                class="video-js vjs-big-play-centered"
                style="margin-right:10px;"
            ></video>

            <video
                id="video3"
                class="video-js vjs-big-play-centered"
            ></video>
        </div>

        <div
            v-for="(value, index) in 4"
            :key="`control_${index}`"
            style="margin-top:10px"
        >
            <span>Video {{ index }}</span> &nbsp;

            <button
                class="control"
                @click="operation('play', `video${index}`)"
            >Play</button> &nbsp;

            <button
                class="control"
                @click="operation('stop', `video${index}`)"
            >Stop</button> &nbsp;

            <button
                class="control"
                @click="operation('pause', `video${index}`)"
            >Pause</button> &nbsp;

            <!-- <button
                class="control"
                @click="operation('reset', `video${index}`)"
            >Reset</button> &nbsp; -->

            <button
                class="control"
                @click="operation('fastForward', `video${index}`)"
            >＞</button> &nbsp;

            <button
                class="control"
                @click="operation('back', `video${index}`)"
            >＜</button> &nbsp;

            <!-- <button
                class="control"
                @click="operation('volumeUp', `video${index}`)"
            >Volume +</button> &nbsp;

            <button
                class="control"
                @click="operation('volumeDown', `video${index}`)"
            >Volume -</button> &nbsp; -->

            <button
                class="control"
                @click="operation('fullScreen', `video${index}`)"
            >Full Screen</button> &nbsp;
        </div>
    </div>
</template>

<script lang="ts">
//#region Import
//#region Vue
import { Vue, Component } from 'vue-property-decorator';
//#endregion

//#region Module
import VideoJs, { VideoJsPlayer, VideoJsPlayerOptions } from 'video.js';
import 'video.js/dist/video-js.css';
//#endregion

//#region Framework
//#endregion

//#region Src
//#endregion

//#region Views
//#endregion

//#region Components
//#endregion

//#region Components Src
//#endregion

//#region Components Views
//#endregion
//#endregion

@Component({
    components: {},
})
export default class VuePageClass extends Vue {
    //#region Prop
    //#endregion

    //#region Variables
    private player = null;

    //#endregion

    //#region Computed
    //#endregion

    //#region Watch
    //#endregion

    //#region Vue Life
    private async beforeCreate(): Promise<void> {}
    private async created(): Promise<void> {}
    private async beforeMount(): Promise<void> {}
    private async mounted(): Promise<void> {
        this.createVideo('video0', 'http://172.22.24.135:7777/api/live/abcd.0', 'application/x-mpegURL');
        // this.createVideo('video0', 'http://172.22.24.135:7777api/live/647e.1', 'application/x-mpegURL');
        // this.createVideo('video1', 'http://172.22.24.135:7777/api/live/1/master.m3u8', 'application/x-mpegURL');
        // this.createVideo('video1', 'http://172.22.24.219:6075/video.mp4', 'video/mp4');
        // this.createVideo('video2', 'http://172.22.24.219:6075/ch0/master.m3u8', 'application/x-mpegURL');
        // this.createVideo('video2', 'http://172.22.24.135:7777/api/live/2/master.m3u8', 'application/x-mpegURL');
        // this.createVideo('video3', 'http://172.22.24.135:7777/api/live/3/master.m3u8', 'application/x-mpegURL');
    }
    private async beforeDestroy(): Promise<void> {}
    private async destroyed(): Promise<void> {}
    //#endregion

    //#region Init
    private createVideo(id: string, stream: string, sourceType: string): void {
        let player = VideoJs(id, {
            // width: 640,
            // height: 360,
            autoplay: 'any',
            controls: true,
            preload: 'auto',
            autoSetup: false,
            liveui: true,
            muted: false,
            sources: [
                {
                    src: stream,
                    type: sourceType,
                },
            ],
            plugins: { reloadSourceOnError: {} },
        });

        let isPlay: boolean = null;
        let waitingTime: number = 0;
        let canplaythroughTime: number = 0;

        player.on('suspend', () => {
            //延遲下載
            console.log(id, 'suspend', '延遲下載');
        });

        player.on('loadstart', () => {
            //客戶端開始請求數據
            console.log(id, 'loadstart', '客戶端開始請求數據');
        });

        // player.on('progress', () => {
        //     //客戶端正在請求數據
        //     console.log(id, 'progress', '客戶端正在請求數據');
        // });

        player.on('abort', () => {
            //客戶端主動終止下載（不是因爲錯誤引起）
            console.log(id, 'abort', '客戶端主動終止下載');
        });

        player.on('error', () => {
            //請求數據時遇到錯誤
            console.log(id, 'error', '請求數據時遇到錯誤');
        });

        player.on('stalled', () => {
            //網速失速
            console.log(id, 'stalled', '網速失速');
        });

        player.on('play', () => {
            //開始播放
            console.log(id, 'play', '開始播放');
        });

        player.on('pause', () => {
            //暫停
            console.log(id, 'pause', '暫停');
        });

        player.on('loadedmetadata', () => {
            //成功獲取資源長度
            console.log(id, 'loadedmetadata', '成功獲取資源長度');
        });

        player.on('loadeddata', () => {
            //渲染播放畫面
            console.log(id, 'loadeddata', '渲染播放畫面');
        });

        player.on('waiting', () => {
            //等待數據，並非錯誤
            console.log(id, 'waiting', '等待數據');
            waitingTime = new Date().getTime();

            if (canplaythroughTime > waitingTime) {
                isPlay = false;
            }

            if (isPlay && waitingTime > canplaythroughTime) {
                isPlay = false;
            }
            console.log(`waiting => `, isPlay);
        });

        player.on('playing', () => {
            //開始回放
            console.log(id, 'playing', '開始回放');
        });

        player.on('canplay', () => {
            //可以播放，但中途可能因爲加載而暫停
            console.log(id, 'canplay', '可以播放，但中途可能因爲加載而暫停');
        });

        player.on('canplaythrough', () => {
            //可以播放，歌曲全部加載完畢
            console.log(id, 'canplaythrough', '可以播放，歌曲全部加載完畢');
            canplaythroughTime = new Date().getTime();
            if (canplaythroughTime > waitingTime) {
                isPlay = true;
            }
            console.log(`canplaythrough => `, isPlay);
        });

        player.on('seeking', () => {
            //尋找中
            console.log(id, 'seeking', '尋找中');
            console.log(`seeking => `, isPlay);

            if (isPlay === false) {
                // this.$router.go(0);
                // location.reload();
                this.$forceUpdate();

                setTimeout(() => {
                    player.dispose();
                    let video = document.getElementById('video_0');
                    video.innerHTML = `
                    <video
                        id="video0"
                        class="video-js vjs-big-play-centered"
                        style="margin-right:10px; width: 640px; height: 360px;"
                    ></video>
                `;
                    this.createVideo('video0', 'http://172.22.24.135:7777/api/live/0/master.m3u8', 'application/x-mpegURL');
                }, 0);
            }
        });

        player.on('seeked', () => {
            //尋找完畢
            console.log(id, 'seeked', '尋找完畢');
        });

        // player.on('timeupdate', () => {
        //     //播放時間改變
        //     console.log(id, 'timeupdate', '播放時間改變');
        // });

        // player.on('ended', () => {
        //     //播放結束
        //     console.log(id, 'ended', '播放結束');
        // });

        // player.on('ratechange', () => {
        //     //播放速率改變
        //     console.log(id, 'ratechange', '播放速率改變');
        // });

        player.on('durationchange', () => {
            //資源長度改變
            console.log(id, 'durationchange', '資源長度改變');
            player.play();
        });

        // player.on('volumechange', () => {
        //     //音量改變
        //     console.log(id, 'volumechange', '音量改變');
        // });
    }

    private operation(param: string, id: string): void {
        let player = VideoJs(id);

        switch (param) {
            case 'play':
                //開始播放
                player.play();

                break;

            case 'stop':
                //停止播放
                player.pause();

                break;

            case 'fastForward':
                //快進
                var whereYouAt = player.currentTime();
                player.currentTime(10 + whereYouAt);

                break;

            case 'pause':
                //重新加載
                player.pause();
                // player.load();
                // player.play();

                break;

            case 'back':
                //後退
                var whereYouAt = player.currentTime();
                player.currentTime(whereYouAt - 10);

                break;

            case 'fullScreen':
                //全屏
                player.requestFullscreen();

                break;

            case 'volumeUp':
                //音量加
                var howLoudIsIt = player.volume();
                player.volume(howLoudIsIt + 0.1);

                break;

            case 'volumeDown':
                //音量減
                var howLoudIsIt = player.volume();
                player.volume(howLoudIsIt - 0.1);

                break;

            case 'reset':
                //重置，視頻不會播放
                player.reset();

                break;

            default:
                break;
        }
    }

    //#endregion

    //#region View Event
    //#endregion

    //#region Other Function
    //#endregion
}
</script>

<style scoped lang="scss">
::v-deep .vjs-big-play-button {
    font-size: 2.5em;
    line-height: 2.3em;
    height: 2.5em;
    width: 2.5em;
    -webkit-border-radius: 2.5em;
    -moz-border-radius: 2.5em;
    border-radius: 2.5em;
    background-color: #73859f;
    background-color: rgba(115, 133, 159, 0.5);
    border-width: 0.15em;
    margin-top: -1.25em;
    margin-left: -1.75em;
}

::v-deep .vjs-mute-control,
::v-deep .vjs-volume-panel {
    display: none;
}
</style>
