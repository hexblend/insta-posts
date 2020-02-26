/* <div class="song-timer">
    <span class="current-time">2:52</span>
    <div class="bar">
        <div class="bar-current"></div>
        <div class="bar-background"></div>
    </div>
    <span class="total-time">3:38</span>
</div> */

const total_time_el = document.querySelector('.total-time');
const current_time_el = document.querySelector('.current-time');
const bar_el = document.querySelector('.bar-current');

const song = {
	title: 'Rockstar',
	author: 'Post Malone ft. 21 Savage',
	length: 218 // seconds
};

const transToMinutes = totalSeconds => {
	let minutes = Math.floor(totalSeconds / 60);
	let seconds = totalSeconds % 60;
	if (seconds < 10) seconds = '0' + seconds;
	return minutes + ':' + seconds;
};

total_time_el.innerText = transToMinutes(song.length);

let current_passed = 0;
setInterval(() => {
	if (current_passed < song.length) {
		current_passed += 1;
		current_time_el.innerText = transToMinutes(current_passed);
		let persentege = (current_passed / song.length) * 100;
		bar_el.style.width = persentege + '%';
	}
}, 1000);
