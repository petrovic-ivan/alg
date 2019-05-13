// Insertion sort is in-place algorithm.
// - It iterates the input elements by growing the sorted array at each iteration. 
// - It compares the current element with the largest value in the sorted array. 
// - If the current element is greater, then it leaves the element in its place and moves on to the next element else it finds its correct position in the sorted array and moves it to that position. 
// - This is done by shifting all the elements, which are larger than the current element, in the sorted array to one position ahead.
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