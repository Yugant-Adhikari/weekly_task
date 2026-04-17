// A for loop to run 4 times
for (let i = 1; i <= 4; i++) {
    // Generate an image tag for each number (1.jpg, 2.jpg, etc.)
    document.write(`<img src="${i}.jpg" alt="${i}.jpg" style="width:200px; margin:10px;">`);
}
