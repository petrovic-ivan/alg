public class MergeSort {
    public static void main(String[] args) {

        int[] intArray = { 20, 35, -15, 7, 55, 1, -22 };

        mergeSort(intArray, 0, intArray.length, "rignt");

        for (int i = 0; i < intArray.length; i++) {
            System.out.println(intArray[i]);
        }

    }

    public static void mergeSort(int[] input, int start, int end, String o) {
        // System.out.println("Start: " + start + " End: " + end + " " + o);
        if (end - start < 2) {
            // System.out.println("return ---------------");
            return; 
        }

        int mid = (start + end) / 2;
        mergeSort(input, start, mid, "right");
        mergeSort(input, mid, end, "left");
        
        merge(input, start, mid, end);
    }

    public static void merge(int[] input, int start, int mid, int end) {
        // System.out.println("start: " + Integer.toString(start) + " mid: " + Integer.toString(mid) + " end: " + Integer.toString(end));

        if (input[mid - 1] <= input[mid]) {
            return;
        }

        int i = start;
        int j = mid;
        int tempIndex = 0;

        int[] temp = new int[end - start];
        while(i < mid && j < end) {
            temp[tempIndex++] = input[i] <= input[j] ? input[i++] : input[j++];
        }

        System.arraycopy(input, i, input, start + tempIndex, mid - i);
        System.arraycopy(temp, 0, input, start, tempIndex);

    }

}