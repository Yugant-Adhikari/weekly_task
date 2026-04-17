document.write('<table border="1" style="width: 80%; border-collapse: collapse; text-align: center; font-family: Arial, sans-serif;">');

// 1. Create the Table Header
document.write(`
    <tr style="background-color: #3a8ba3; color: white; height: 40px;">
        <th>S.N.</th>
        <th>Name</th>
        <th>Image</th>
    </tr>
`);

// 2. Loop to generate 4 data rows
for (let i = 1; i <= 4; i++) {
    // Logic for alternate background colors
    // If i is even, use light blue; if odd, use white
    let bgColor = (i % 2 === 0) ? "#e9eff1" : "#ffffff";

    document.write(`
        <tr style="background-color: ${bgColor}; height: 35px;">
            <td>${i}</td>
            <td>Name ${i}</td>
            <td>${i}.jpg</td>
        </tr>
    `);
}

document.write('</table>');
