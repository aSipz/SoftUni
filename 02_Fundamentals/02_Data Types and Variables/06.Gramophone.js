function gramophone(band, album, song) {
    let songDuration = album.length * band.length * song.length / 2;
    let rotations = songDuration / 2.5;
    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);
}
gramophone('Rammstein', 'Sehnsucht', 'Engel');