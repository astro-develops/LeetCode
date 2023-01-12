/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let numberArr: number[] = []
	
    lists.map((node) => {
        while(node !== null) {
            if (node) {
                numberArr.push(node.val);
                node = node.next;
            }
        }
    })
    
    if (numberArr.length === 0) return null
    
    numberArr.sort((a,b) => a - b)

    let node = new ListNode(numberArr[0])
    
    let current = node;

    numberArr.forEach((number, index) => {
        if(index !== 0) {
            current.next = new ListNode(number)
            current = current.next;
        }
    })
    
    return node
}