/* *****************************************************************************
 *  Name:              Alan Turing
 *  Coursera User ID:  123456
 *  Last modified:     1/1/2019
 **************************************************************************** */

import edu.princeton.cs.algs4.WeightedQuickUnionUF;

import static java.lang.Math.pow;

public class Percolation {
    private WeightedQuickUnionUF weightedQuickUnionUF
    private boolean[][] grid;

    // creates n-by-n grid, with all sites initially blocked
    public Percolation(int n) {
        int size = n * n;
        grid = new int[size];
        for (int i = 0; i < pow(n, 2); i++) {
            grid[i] = 0;
        }
    }

    // opens the site (row, col) if it is not open already
    public void open(int row, int col) {
        grid[row][col] = 1;
    }

    // is the site (row, col) open?
    public boolean isOpen(int row, int col) {
        return grid[row][col] == 1;
    }

    // is the site (row, col) full?
    public boolean isFull(int row, int col) {

    }

    // returns the number of open sites
    public int numberOfOpenSites() {

    }

    // does the system percolate?
    public boolean percolates() {

    }

    // test client (optional)
    public static void main(String[] args) {

    }
}
