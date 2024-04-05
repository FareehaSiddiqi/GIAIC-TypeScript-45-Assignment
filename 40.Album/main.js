// Q:40 Album
function make_album(artist, title, track) {
    // Create an album object with artist and title properties
    var album = { artist: artist, title: title };
    // Check if the track parameter is provided and add it to the album object if so
    if (track !== undefined) {
        album['track'] = track;
    }
    // Return the album object
    return album;
}
console.log(make_album("The Velvet Underground & Nico (1967)", "The Velvet Underground"));
console.log(make_album(") Madonna", "Like a Prayer (1989)"));
console.log(make_album("NFAK", "Kamli Waly", 12));
console.log(make_album("Atif Aslam", "Rabta"));
console.log(make_album("Michael Jackson", "Off the Wall (1979)"));
console.log(make_album("Van Morrison", "Astral Weeks (1968)"));
