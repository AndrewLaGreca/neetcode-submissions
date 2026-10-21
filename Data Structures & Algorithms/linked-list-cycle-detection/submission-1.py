# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        thisSet = set()
        curr = head

        while curr:
            if curr not in thisSet:
                thisSet.add(curr)
                curr = curr.next
            else: 
                return True

        return False