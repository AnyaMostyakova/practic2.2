class TreeNode {
    id: string;
    name: string;
    children: TreeNode[];
    private _isExpanded: boolean;
    private _isSelected: boolean;
    private _isVisible: boolean;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        this.children = [];
        this._isExpanded = false;
        this._isSelected = false;
        this._isVisible = false;
    }

    addChild(child: TreeNode): void {
        this.children.push(child);
    }

    removeChild(child: TreeNode): void {
        this.children = this.children.filter(node => node.id !== child.id);
    }

    toggleExpanded(): void {
        this._isExpanded = !this._isExpanded;
    }

    toggleSelected(): void {
        this._isSelected = !this._isSelected;
        this._isVisible = this._isSelected;
    }

    isSelected(): boolean {
        return this._isSelected;
    }

    isExpanded(): boolean {
        return this._isExpanded;
    }

    isVisible(): boolean {
        return this._isVisible;
    }
}

export default TreeNode;
