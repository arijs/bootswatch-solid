import { createVar } from '@vanilla-extract/css'

// CSS custom properties for Bootstrap button-group components.
// Button-group itself does not define its own --bs-btn-group-* vars;
// it inherits --bs-border-radius and --bs-border-width from the root scope.
// We expose them here as component-scoped vars so theme overrides can target
// exactly the values used by the group's border-radius and negative margin.
//
// Source: Bootstrap's .btn-group CSS block.

export const varBsBtnGroupBorderRadius = createVar()   // mirrors --bs-border-radius at group level
export const varBsBtnGroupBorderWidth = createVar()    // mirrors --bs-border-width at group level
