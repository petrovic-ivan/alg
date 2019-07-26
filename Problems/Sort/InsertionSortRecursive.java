public class InsertionSortRecursive {
    public static void main(String[] args) {
        int[] intArray = { 20, 35, -15, 7, 55, 1, -22 };

        insertionSort(intArray, intArray.length);

        for (int i = 0; i < intArray.length; i++) {
            System.out.println(intArray[i]);
        }
    }

    private static void insertionSort(int[] input, int numItems) {
        if (numItems < 2) {
            return;
        }

        insertionSort(input, numItems - 1);

        int currentIterationValue = input[numItems - 1];
        int i;
        for (i = numItems - 1; i > 0 && input[i - 1] > currentIterationValue; i--) {
            input[i] = input[i - 1];
        }
        input[i] = currentIterationValue;
    }
}
