const hijabImages = [
    "https://dub.sh/3DkAiz2",
    "https://dub.sh/V8KAwdz",
    "https://dub.sh/52Riyi",
    "https://dub.sh/iMPk1fW",
    "https://dub.sh/UGAhd1k",
    "https://dub.sh/RlYQWGS"
];

const imgs = document.getElementsByTagName("img");

for (image of imgs) {
    const index = Math.floor(Math.random() * hijabImages.length);
    image.src = hijabImages[index];
}