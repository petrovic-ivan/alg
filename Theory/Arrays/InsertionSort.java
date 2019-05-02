// Insertion sort iterates, consuming one input element each repetition, and growing a sorted partition. 
// At each iteration, insertion sort removes one element from the unsorted partition, finds the location it belongs within the sorted partition, and inserts it there. 
// It repeats until no input elements remain.
public class InsertionSort {
    public static void main(String[] args) {
        int[] intArray = { 20, 35, -15, 7, 55, 1, -22 };

        for (int lastUnsortedIndex = intArray.length - 1; lastUnsortedIndex > 0; lastUnsortedIndex--) {
            for (int i = 0; i < lastUnsortedIndex; i++) {
                if (intArray[i] > intArray[i + 1]) {
                    swap(intArray, i, i + 1);
                }
            }
        }

        for (int i = 0; i < intArray.length; i++) {
            System.out.println(intArray[i]);
        }
    }
}