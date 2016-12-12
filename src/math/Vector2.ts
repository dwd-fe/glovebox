import { vec2 } from 'gl-matrix';
export default class Vector2 {
    private instance: vec2;
    private _updated: boolean = true;

    constructor(x: number | vec2, y?: number) {
        if (x instanceof Float32Array) {
            this.instance = x;
        } else {
            this.instance = vec2.fromValues(x, y === undefined ? x : y);
        }
    }

    public get updated(): boolean {
        return this._updated;
    }

    public set updated(updated: boolean) {
        this._updated = updated;
    }

    public get x(): number {
        return this.instance[0];
    }

    public get y(): number {
        return this.instance[1];
    }

    public set x(x: number) {
        this.instance[0] = x;
        this._updated = true;
    }

    public set y(y: number) {
        this.instance[1] = y;
        this._updated = true;
    }

    add(vec: Vector2): Vector2 {
        return new Vector2(
            vec2.add(
                vec2.create(),
                this.instance,
                vec.instance
            )
        );
    }

    sub(vec: Vector2): Vector2 {
        return new Vector2(
            vec2.sub(
                vec2.create(),
                this.instance,
                vec.instance
            )
        );
    }

    div(vec: Vector2): Vector2 {
        return new Vector2(
            vec2.div(
                vec2.create(),
                this.instance,
                vec.instance
            )
        );
    }

    mul(vec: Vector2): Vector2 {
        return new Vector2(
            vec2.mul(
                vec2.create(),
                this.instance,
                vec.instance
            )
        );
    }

    dist(vec: Vector2): number {
        return vec2.dist(this.instance, vec.instance);
    }

    dot(vec: Vector2): number {
        return vec2.dot(
            this.instance,
            vec.instance
        );
    }

    rotate(vec: Vector2, rad: number) {
        const m = this.sub(vec);
        const s = Math.sin(rad);
        const c = Math.cos(rad);
        return new Vector2(
            m.dot(new Vector2(c, -s)),
            m.dot(new Vector2(s, c))
        ).add(vec);
    }

    toString(): string {
        return `(${this.x},${this.y})`;
    }
}
