console.log("============== New Run ==============")
interface Cats {
    id: string;
    hitPoints: number;
    attack: number;
}

interface BaseRecord {
    id: string;
}

interface Database<T extends BaseRecord> {
    set(newValue: T): void;
    get(id: string): T | undefined;
}

class InMemoryDatabase<T extends BaseRecord> implements Database<T> {
    private db: Record<string, T> = {}

    get(id: string): T | undefined {
        return this.db[id];
    }

    set(newValue: T): void {
        this.db[newValue.id] = newValue;
    }
}

const bagOfCats = new InMemoryDatabase<Cats>();

bagOfCats.set({
    id: "1234",
    hitPoints: 100,
    attack: 15
});
console.log(bagOfCats.get("1234"));