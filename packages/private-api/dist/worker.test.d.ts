import { Env } from "../bindings";
declare global {
    function getMiniflareBindings(): Env;
}
