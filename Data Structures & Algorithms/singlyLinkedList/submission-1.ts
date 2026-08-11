class LinkedList {
    head: ListNode | null;
    tail: ListNode| null;

    constructor() {
        this.head = null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        let current = this.head;

        for(let i = 0; current; i++) {
            if(i===index) return current.val
            current = current.next
        }

        return -1
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        this.head = new ListNode(val, this.head)
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val: number): void {
        let tail = this.getTail()

        if (tail) {
            tail.next = new ListNode(val)
        } else {
            this.head = new ListNode(val)
        }
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index: number): boolean {
        if (!this.head) return false;

        if (index === 0) {
            this.head = this.head.next;
            return true;
        }

        let current = this.head;

        for (let i = 0; i < index - 1; i++) {
            if (!current.next) return false;
            current = current.next;
        }

        if (!current.next) return false;

        current.next = current.next.next;

        return true;
    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        let values = [];

        let current = this.head;

        for(let i = 0; current; i++) {
            values.push(current.val)

            current = current.next
        }

        return values
    }

    getTail(): ListNode | null {
        let current = this.head;

        while(current && current.next) {
            current = current.next
        }

        return current;
    }
}

class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}


