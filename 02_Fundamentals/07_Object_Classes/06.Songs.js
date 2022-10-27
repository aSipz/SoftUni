function songs(input) {
    let songsCount = input.shift();
    let typeList = input.pop();
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    for (const song of input) {
        let type = song.split('_')[0];
        let name = song.split('_')[1];
        let time = song.split('_')[2];
        let tempSong = new Song(type, name, time);
        if (type == typeList || typeList == 'all') {
            console.log(tempSong.name);
        }
    }
}
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'all']
    );