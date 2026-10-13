<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Use separate TanStack content routes with shared navigation, contact section and footer in the root layout so every page has the same access to navigation and contact.
- Keep Picture This! product information and its temporary order basket on the same content route so shopping stays in one place.
- Store copied website media as Lovable Assets pointers and use React state for the temporary WhatsApp-order basket; orders are not processed online.
- Render brand marks from tightly cropped Lovable Assets pointers, with independent home and navigation assets so replacing the large home mark does not change navigation sizing.
