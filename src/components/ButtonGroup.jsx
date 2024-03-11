import { useItemsStore } from "../stores/itemsStore";
import Button from "./Button";
export default function ButtonGroup() {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsInComplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  );
  const removeAllItems = useItemsStore((state) => state.removeAllItems);
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  return (
    <section className="button-group">
      <Button onClick={removeAllItems} buttonType="secondary">
        Remove All Items
      </Button>
      <Button onClick={resetToInitial} buttonType="secondary">
        Reset to initial
      </Button>
      <Button onClick={markAllAsComplete} buttonType="secondary">
        Mark all as complete
      </Button>
      <Button onClick={markAllAsInComplete} buttonType="secondary">
        Mark all as incomplete
      </Button>
    </section>
  );
}
