// Insertion sort is in-place algorithm.
// - It iterates over array and traverse back in each iteration. 
// - In each iteration it stores value of current iteration index (which also represents first unsorted index).
// - Druing traversion it tries to insert current iteration value in apropriate sort order. 
// - It stops traversion once if traversion value is not greater than current iteration value.
// - Once traversion is stopped it inserts current iteration value in array.

public class InsertionSort {
    public static void main(String[] args) {
        int[] intArray = { 20, 35, -15, 7, 55, 1, -22 };

        for (int firstUnsortedIndex = 1; firstUnsortedIndex < intArray.length; firstUnsortedIndex++) {
            int currentIterationValue = intArray[firstUnsortedIndex];
            int i;
            for (i = firstUnsortedIndex; i > 0 && intArray[i - 1] > currentIterationValue; i--) {
                intArray[i] = intArray[i - 1];
            }
            intArray[i] = currentIterationValue;
        }

        for (int i = 0; i < intArray.length; i++) {
            System.out.println(intArray[i]);
        }
    }
}