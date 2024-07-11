import TreeNode from './TreeNode';

class TreeModel {
    rootNode: TreeNode;
    private selectedNodes: Set<string>;

    constructor(rootNode: TreeNode) {
        this.rootNode = rootNode;
        this.selectedNodes = new Set();
    }

    addRootNode(node: TreeNode): void {
        this.rootNode = node;
    }

    findNodeById(id: string): TreeNode | null {
        const findNode = (node: TreeNode): TreeNode | null => {
            if (node.id === id) {
                return node;
            }
            for (const child of node.children) {
                const foundNode = findNode(child);
                if (foundNode) {
                    return foundNode;
                }
            }
            return null;
        };
        return findNode(this.rootNode);
    }

    toggleNodeExpansion(node: TreeNode): void {
        node.toggleExpanded();
    }

    toggleNodeSelection(node: TreeNode): void {
        node.toggleSelected();
        if (node.isSelected()) {
            this.selectedNodes.add(node.id);
        } else {
            this.selectedNodes.delete(node.id);
        }
        this.updateChildrenSelection(node);
    }

    private updateChildrenSelection(node: TreeNode): void {
        node.children.forEach(child => {
            this.toggleNodeSelection(child);
        });
    }

    getSelectedNodes(): TreeNode[] {
        return Array.from(this.selectedNodes)
            .map(id => this.findNodeById(id))
            .filter(node => node !== null) as TreeNode[];
    }
}

export default TreeModel;
