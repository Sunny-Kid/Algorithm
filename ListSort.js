/**
 * 什么是堆？
 * 1. 堆是一个完全二叉树
 * 2. 堆树中某节点的值总是不大于或不小于其他子节点的值
 * 3. 父节点的值总是大于或等于任何一个子节点的值称为最大堆，父节点的值总是小于或等于任何一个子节点的值称为最小堆
 */

 /**
 * Definition for ListNode.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int val) {
 *         this.val = val;
 *         this.next = null;
 *     }
 * }
 */

// JS链表排序
class Solution {
  findMiddle(head) {
    var slow = head,
      fast = head.next;
    while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow;
  }

  // 合并两个链表
  merge(head1, head2) {
    var dummy = new ListNode(0);
    var tail = dummy;

    while (head1 != null && head2 != null) {
      if (head1.val < head2.val) {
        tail.next = head1;
        head1 = head1.next;
      } else {
        tail.next = head2;
        head2 = head2.next;
      }
      tail = tail.next;
    }

    if (head1 != null) {
      tail.next = head1;
    } else {
      tail.next = head2;
    }

    return dummy.next;
  }

  /* 用二分的方式不断地递归细化链表，直到链表变成只有两个结点，
   * 然后用 merge 排个序，再一层层返回递归，
   * 值得说明的是每退出一层递归都有两个排好序的链表，
   * 每一层递归都要 merge 名为 left 和 right 的两个链表
   */
  sortList(head) {
    if (head == null || head.next == null) {
      return head;
    }

    mid = this.findMiddle(head);

    right = this.sortList(mid.next);
    // 保证 left 是 head 到 mid 的链表,不然 left 还是从 head 开始的整个链表
    mid.next = null;
    left = this.sortList(head);

    return this.merge(left, right);
  }
}

class Solution2 {
  sortList (head) {
    if (head === null || head.next === null) return head
    let slow = head
    let fast = head
    let pre = head
    while (fast !== null && fast.next !== null) {
      pre = slow
      slow = slow.next
      fast = fast.next.next
    }
    pre.next = null
    return this.merge(this.sortList(head), this.sortList(slow))
  }

  merge (head1, head2) {
    if (head1 === null) return head2
    if (head2 === null) return head1
    if (head1.val < head2.val) {
      head1.next = this.merge(head1.next, head2)
      return head1
    } else {
      head2.next = this.merge(head1, head2.next)
      return head2
    }
  }
}
