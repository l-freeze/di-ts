import "reflect-metadata";
import {container} from "./di";
import {Interactor} from "./product/application/product/register/Interactor";
import {Input} from "./product/application/product/register/IO";

container.resolve(Interactor).execute(
    {
        name: '噴水',
        description: '水が噴き出すオブジェクト。主に公園に置かれるが、主張の強い金持ちの庭に置かれる事もある。'
    } as Input
);