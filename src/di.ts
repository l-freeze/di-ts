import "reflect-metadata";
import {container} from "tsyringe";
import {SqliteProductRepository} from "./product/persistence/SqliteProductRepository";
import "./product/diContainerRegister";

export {container};