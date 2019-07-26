public class RadixSortString {
    public static void main(String[] args) {
        String[] radixArray = { "bcdef", "dbagc", "abcde", "cmadd", "bbbbb" };

        radixSort(radixArray, 26, 5);

        for (int i = 0; i < radixArray.length; i++) {
            System.out.println(radixArray[i]);
        }
    }

    private static void radixSort(String[] input, int radix, int width) {
        for (int i = width - 1; i >= 0; i--) {
            radixSingleSort(input, i, radix);            
        }
    }

    private static void radixSingleSort(String[] input, int position, int radix) {

            int numItems = input.length;

            int[] countArray = new int[radix];

            for (String item : input) {
                countArray[getIndex(position, item)]++;
            }

            // Adjust count array
            for (int i = 1; i < radix; i++) {
                countArray[i] += countArray[i - 1];
            }

            String[] temp = new String[numItems];
            for (int tempIndex = numItems - 1; tempIndex >= 0; tempIndex--){
                temp[--countArray[getIndex(position, input[tempIndex])]] = input[tempIndex];
            }

            for (int tempIndex = 0; tempIndex < numItems; tempIndex++) {
                input[tempIndex] = temp[tempIndex];
            }
    }

    private static int getIndex(int position, String item) {
        return item.charAt(position) - 'a';
    }
}