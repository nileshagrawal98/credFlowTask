function spiralTraversal(mat, n, m) {

    let out = [];

    let top = 0;
    let left = 0;
    let bottom = n - 1;
    let right = m - 1;

    while (top <= bottom || left <= right) {

        for (let i = left; i <= right; i++) {
            out.push(mat[top][i]);
        }
        top++;
        if (top > bottom) break;


        for (let i = top; i <= bottom; i++) {
            out.push(mat[i][right]);
        }
        right--;
        if (left > right) break;


        for (let i = right; i >= left; i--) {
            out.push(mat[bottom][i]);
        }
        bottom--;
        if (top > bottom) break;


        for (let i = bottom; i >= top; i--) {
            out.push(mat[i][left]);
        }
        left++;
        if (left > right) break;
    }

    return out.join(' ');

}

function main() {
    let input = `5 4
    1 2 3 4
    14 15 16 5
    13 20 17 6
    12 19 18 7
    11 10 9 8`

    input = input.trim().split('\n');
    let [n, m] = input[0].trim().split(' ').map(Number);
    let mat = [];
    for (let i = 0; i < n; i++) {
        mat.push(input[i + 1].trim().split(' ').map(Number));
    }
    console.log(spiralTraversal(mat, n, m));

}

main();