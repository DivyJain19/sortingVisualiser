import React from "react";
import SortingCard from "./SortingCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Home = () => {
  return (
    <div>
      <div className="nav-bar">
        <h1>Sorting Visualizer</h1>
      </div>
      <div
        style={{
          paddingTop: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box>
          <Grid
            container
            style={{
              paddingTop: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <SortingCard
                file="bubble"
                algoName="Bubble Sort"
                title="Bubble Sort"
                description="Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst case time complexity is quite high."
                complexity="Worst and Average Case Time Complexity: O(N2). The worst case occurs when an array is reverse sorted.
              Best Case Time Complexity: O(N). The best case occurs when an array is already sorted.
              Auxiliary Space: O(1)"
                st="stable"
              ></SortingCard>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <SortingCard
                file="quick"
                algoName="Quick Sort"
                title="Quick Sort"
                description="Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways. "
                complexity="The best-case time complexity of quicksort is O(n*logn). Average Case Complexity - It occurs when the array elements are in jumbled order that is not properly ascending and not properly descending. The average case time complexity of quicksort is O(n*logn)."
                st="Unstable"
              ></SortingCard>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <SortingCard
                file="merge"
                algoName="Merge Sort"
                title="Merge Sort"
                description="The Merge Sort algorithm is a sorting algorithm that is considered as an example of the divide and conquer strategy. So, in this algorithm, the array is initially divided into two equal halves and then they are combined in a sorted manner. We can think of it as a recursive algorithm that continuously splits the array in half until it cannot be further divided. This means that if the array becomes empty or has only one element left, the dividing will stop, i.e. it is the base case to stop the recursion. If the array has multiple elements, we split the array into halves and recursively invoke the merge sort on each of the halves. Finally, when both the halves are sorted, the merge operation is applied. Merge operation is the process of taking two smaller sorted arrays and combining them to eventually make a larger one."
                complexity="The time complexity of MergeSort is O(n*Log n) in all the 3 cases (worst, average and best) as the mergesort always divides the array into two halves and takes linear time to merge two halves."
                st="stable"
              ></SortingCard>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <SortingCard
                file="insertion"
                algoName="Insertion Sort"
                title="Insertion Sort"
                description="Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part."
                complexity="The worst-case (and average-case) complexity of the insertion sort algorithm is O(n²). Meaning that, in the worst case, the time taken to sort a list is proportional to the square of the number of elements in the list. The best-case time complexity of insertion sort algorithm is O(n) time complexity."
                st="stable"
              ></SortingCard>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <SortingCard
                file="selection"
                algoName="Selection Sort"
                title="Selection Sort"
                description="The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray. "
                complexity="The time complexity of the selection sort is the same in all cases. At every step, you have to find the minimum element and put it in the right place. The minimum element is not known until the end of the array is not reached."
                st="Unstable"
              ></SortingCard>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Home;
