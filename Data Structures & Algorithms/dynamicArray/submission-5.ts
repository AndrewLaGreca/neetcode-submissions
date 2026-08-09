class DynamicArray {
    size;
    array;

    constructor(capacity: number) {
        this.size = 0;
        this.array = new Array(capacity);
    }

    get(i: number): number {
        return this.array[i];
    }

    set(i: number, n: number): void {
        this.array[i] = n;
    }

    pushback(n: number): void {
        if (this.size === this.array.length) this.resize();

        this.array[this.size] = n;
        this.size++;
    }

    popback(): number {
        let pop = this.array[this.size - 1];
        this.array[this.size - 1] = null;
        this.size--;

        return pop;
    }

    resize(): void {
        let newArray = new Array(this.array.length * 2);

        for (let i = 0; i < this.size; i++) {
            newArray[i] = this.array[i];
        }

        this.array = newArray;
    }

    getSize(): number {
        return this.size;
    }

    getCapacity(): number {
        return this.array.length;
    }
}