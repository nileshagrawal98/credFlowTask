function spiralTraversal(mat, m, n) {

    let out = [];

    let top = 0;
    let left = 0;
    let bottom = m - 1;
    let right = n - 1;

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
    let [m, n] = input[0].trim().split(' ').map(Number);
    let mat = [];
    for (let i = 0; i < m; i++) {
        mat.push(input[i + 1].trim().split(' ').map(Number));
    }
    console.log(spiralTraversal(mat, m, n));

}

main();

/*
Sample Cases

3 3
111 222 333
666 555 444
999 888 777

1 1
2

2 3
9 6 5
8 9 7

5 4
1 2 3 4
14 15 16 5
13 20 17 6
12 19 18 7
11 10 9 8
*/