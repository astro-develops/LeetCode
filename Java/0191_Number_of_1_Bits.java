public class Solution {
    public int hammingWeight(int n) {

        String s = Integer.toBinaryString(n).replaceAll("0", "");
        return s.length();

//        return Integer.bitCount(n);
        
    }
}