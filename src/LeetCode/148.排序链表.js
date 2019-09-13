/**
 * 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。

示例 1:

输入: 4->2->1->3
输出: 1->2->3->4
示例 2:

输入: -1->5->3->4->0
输出: -1->0->3->4->5
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  // termination
  if (!head || !head.next) return head;
  // cut the LinkedList at the mid index.
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // save and cut.
  const mid = slow.next;
  slow.next = null;
  // recursive for cutting.
  let left = sortList(head);
  let right = sortList(mid);
  // merge `left` and `right` linked list and return it.
  let prev = (prehead = new ListNode(0));
  while (left && right) {
    if (left.val < right.val) {
      prev.next = left;
      left = left.next;
    } else {
      prev.next = right;
      right = right.next;
    }
    prev = prev.next;
  }
  prev.next = left ? left : right;
  return prehead.next;
};
