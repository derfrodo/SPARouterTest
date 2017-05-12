declare var require: {
    (path: string): any;
    <T>(path: string): any;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path:string) => T)=> void) => void;
}