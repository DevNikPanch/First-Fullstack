export function showActiveItem(e: Event): void {
    if (!e.target) return;
    if (e.target instanceof HTMLElement) {
        const listItems = document.querySelectorAll<HTMLElement>('.list__item');

        if (listItems) {
            listItems.forEach((item: HTMLElement): void => {
                item.style.backgroundColor = '';
            });
        }

        e.target.style.backgroundColor = `#122845`;
    }
}
