import {Column, Entity} from "../../../src/index";
import {PrimaryColumn} from "../../../src/decorator/columns/PrimaryColumn";
import {Index} from "../../../src/decorator/Index";

@Entity("sample01_post")
export class Post {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column()
    @Index({ unique: true })
    title: string;

    @Column()
    text: string;

    @Column("int", {
        nullable: false
    })
    likesCount: number;

}