import { type Component, useContext } from 'solid-js'
// Contract classes — stable identifiers shared by all themes, applied to elements.
// No runtime resolution required: every component always uses these same names.
import {
btn,
btnDanger,
btnInfo,
btnPrimary,
btnSecondary,
btnSuccess,
btnWarning,
} from '../../theme-contract/ui/buttons/contract.css'
// Root-level contract classes: body wrapper + text-bearing root.
import { body, bodyText } from '../../theme-contract/theme-contract.css'
// Scope classes — each element carries BOTH the scope class and its contract class.
// CSS rules use compound selectors (.scope.contract) so each element is styled by
// exactly the theme whose class it carries — no ancestor matching, no conflicts.
import { bootstrapScope } from '../../themes/bootstrap/scope.css'
import { sketchyScope } from '../../themes/sketchy/scope.css'

// Side-effect imports: register globalStyle rules that map
//   themeScope + contractClass  →  actual CSS  (compound selector, no space)
import '../../themes/bootstrap/ui/buttons/styles.css'
import '../../themes/sketchy/ui/buttons/styles.css'

// ThemeContext — propagates the active scope class down to every component so
// each element can stamp it onto itself without prop-drilling.
import { ThemeContext } from '../../context/ThemeContext'

// ThemedBody — stamps the scope class together with the body + bodyText contract
// classes on a div wrapper so that root-level theme styles (font, color,
// background) take effect.  Each time ThemeContext changes (nested providers)
// a new ThemedBody wrapper stamps the correct scope for that subtree.
const ThemedBody: Component<{ children: any }> = (props) => {
const theme = useContext(ThemeContext)
return <div class={`${theme} ${body} ${bodyText}`}>{props.children}</div>
}

// Buttons reads the current theme class from context and applies it directly to
// every button element alongside the contract classes.  No container needed.
const Buttons: Component = () => {
const theme = useContext(ThemeContext)
return (
<>
<button type="button" class={`${theme} ${btn} ${btnPrimary}`}>
Primary
</button>{' '}
<button type="button" class={`${theme} ${btn} ${btnSecondary}`}>
Secondary
</button>{' '}
<button type="button" class={`${theme} ${btn} ${btnSuccess}`}>
Success
</button>{' '}
<button type="button" class={`${theme} ${btn} ${btnDanger}`}>
Danger
</button>{' '}
<button type="button" class={`${theme} ${btn} ${btnWarning}`}>
Warning
</button>{' '}
<button type="button" class={`${theme} ${btn} ${btnInfo}`}>
Info
</button>
</>
)
}

const sectionStyle = {
'border-left': '4px solid #dee2e6',
'padding-left': '1rem',
'margin-bottom': '2rem',
}

const labelStyle = { margin: '0 0 0.5rem', 'font-size': '0.75rem', color: '#6c757d' }

const PocThemeScopeDemo: Component = () => (
<div style={{ 'font-family': 'system-ui, sans-serif', padding: '2rem', 'max-width': '900px' }}>
<h1>Element-Owned Scope — PoC</h1>
<p>
Every <code>&lt;button&gt;</code> below carries the <em>same</em> contract class names (
<code>btn</code>, <code>btnPrimary</code>, …) <strong>plus</strong> the active theme's
scope class. CSS rules use compound selectors (<code>.theme.btn</code>) so each element
is styled by exactly the theme class it carries — no ancestor matching, no nesting
conflicts, unlimited nesting depth.
</p>

<h2>1. Bootstrap theme</h2>
<div style={sectionStyle}>
<ThemeContext value={bootstrapScope}>
<ThemedBody>
<Buttons />
</ThemedBody>
</ThemeContext>
</div>

<h2>2. Sketchy theme</h2>
<p style={{ 'font-size': '0.875rem', color: '#6c757d' }}>
Note: Neucha font loads from Google Fonts if available; otherwise a generic cursive is
used. The hand-drawn border-radius is always present.
</p>
<div style={sectionStyle}>
<ThemeContext value={sketchyScope}>
<ThemedBody>
<Buttons />
</ThemedBody>
</ThemeContext>
</div>

<h2>3. Nested — Bootstrap (outer) / Sketchy (inner) ✓</h2>
<p style={{ 'font-size': '0.875rem', color: '#6c757d' }}>
The inner <code>ThemeContext</code> overrides the outer one. Each button
carries the class of the nearest provider — no CSS workaround needed.
</p>
<div style={sectionStyle}>
<ThemeContext value={bootstrapScope}>
<ThemedBody>
<p style={labelStyle}>bootstrap (outer)</p>
<Buttons />
<div style={{ 'margin-top': '0.75rem' }}>
<ThemeContext value={sketchyScope}>
<ThemedBody>
<p style={labelStyle}>sketchy (inner) — Sketchy wins ✓</p>
<Buttons />
</ThemedBody>
</ThemeContext>
</div>
</ThemedBody>
</ThemeContext>
</div>

<h2>4. Nested — Sketchy (outer) / Bootstrap (inner) ✓</h2>
<p style={{ 'font-size': '0.875rem', color: '#6c757d' }}>
Reverse nesting works identically — no specificity tricks, no <code>@layer</code>, no
extra selectors. Element-owned scope eliminates the problem entirely.
</p>
<div style={sectionStyle}>
<ThemeContext value={sketchyScope}>
<ThemedBody>
<p style={labelStyle}>sketchy (outer)</p>
<Buttons />
<div style={{ 'margin-top': '0.75rem' }}>
<ThemeContext value={bootstrapScope}>
<ThemedBody>
<p style={labelStyle}>bootstrap (inner) — Bootstrap wins ✓</p>
<Buttons />
</ThemedBody>
</ThemeContext>
</div>
</ThemedBody>
</ThemeContext>
</div>

<h2>5. Three levels deep — Bootstrap / Sketchy / Bootstrap ✓</h2>
<p style={{ 'font-size': '0.875rem', color: '#6c757d' }}>
Unlimited nesting depth: each provider overrides its parent independently. The CSS
stylesheet is unchanged — no new selectors are required for each additional depth.
</p>
<div style={sectionStyle}>
<ThemeContext value={bootstrapScope}>
<ThemedBody>
<p style={labelStyle}>bootstrap (depth 1)</p>
<Buttons />
<div style={{ 'margin-top': '0.75rem' }}>
<ThemeContext value={sketchyScope}>
<ThemedBody>
<p style={labelStyle}>sketchy (depth 2)</p>
<Buttons />
<div style={{ 'margin-top': '0.75rem' }}>
<ThemeContext value={bootstrapScope}>
<ThemedBody>
<p style={labelStyle}>bootstrap (depth 3) — Bootstrap wins ✓</p>
<Buttons />
</ThemedBody>
</ThemeContext>
</div>
</ThemedBody>
</ThemeContext>
</div>
</ThemedBody>
</ThemeContext>
</div>

<h2>Architecture summary</h2>
<table
style={{
'border-collapse': 'collapse',
width: '100%',
'font-size': '0.875rem',
}}
>
<thead>
<tr style={{ background: '#f8f9fa' }}>
<th style={{ border: '1px solid #dee2e6', padding: '0.5rem' }}>Layer</th>
<th style={{ border: '1px solid #dee2e6', padding: '0.5rem' }}>File</th>
<th style={{ border: '1px solid #dee2e6', padding: '0.5rem' }}>
Responsibility
</th>
</tr>
</thead>
<tbody>
<tr>
<td style={{ border: '1px solid #dee2e6', padding: '0.5rem' }}>Contract</td>
<td style={{ border: '1px solid #dee2e6', padding: '0.5rem' }}>
<code>theme-contract/…/contract.css.ts</code>
</td>
<td style={{ border: '1px solid #dee2e6', padding: '0.5rem' }}>
Empty <code>style(&#123;&#125;)</code> — stable hashed identifiers, no CSS
rules
</td>
</tr>
<tr>
<td style={{ border: '1px solid #dee2e6', padding: '0.5rem' }}>Scope</td>
<td style={{ border: '1px solid #dee2e6', padding: '0.5rem' }}>
<code>themes/*/scope.css.ts</code>
</td>
<td style={{ border: '1px solid #dee2e6', padding: '0.5rem' }}>
One empty class per theme; wires root styles via{' '}
<code>globalStyle(scope + body/bodyText, …)</code>
</td>
</tr>
<tr>
<td style={{ border: '1px solid #dee2e6', padding: '0.5rem' }}>Styles</td>
<td style={{ border: '1px solid #dee2e6', padding: '0.5rem' }}>
<code>themes/*/ui/…/styles.css.ts</code>
</td>
<td style={{ border: '1px solid #dee2e6', padding: '0.5rem' }}>
<code>globalStyle(scope + contract, cssProps)</code> — compound selector
(no space), one rule set per theme
</td>
</tr>
<tr>
<td style={{ border: '1px solid #dee2e6', padding: '0.5rem' }}>Context</td>
<td style={{ border: '1px solid #dee2e6', padding: '0.5rem' }}>
<code>ThemeContext</code>
</td>
<td style={{ border: '1px solid #dee2e6', padding: '0.5rem' }}>
Propagates the active scope class to every descendant component; nesting
overrides automatically
</td>
</tr>
<tr>
<td style={{ border: '1px solid #dee2e6', padding: '0.5rem' }}>ThemedBody</td>
<td style={{ border: '1px solid #dee2e6', padding: '0.5rem' }}>
<code>components/poc/PocThemeScopeDemo.tsx</code>
</td>
<td style={{ border: '1px solid #dee2e6', padding: '0.5rem' }}>
Stamps <code>scope + body + bodyText</code> on a wrapper div so root-level
font/color/bg styles take effect in that subtree
</td>
</tr>
<tr>
<td style={{ border: '1px solid #dee2e6', padding: '0.5rem' }}>Component</td>
<td style={{ border: '1px solid #dee2e6', padding: '0.5rem' }}>
<code>components/…/*.tsx</code>
</td>
<td style={{ border: '1px solid #dee2e6', padding: '0.5rem' }}>
Reads theme from context; applies scope class to every rendered element
alongside contract classes
</td>
</tr>
</tbody>
</table>
</div>
)

export default PocThemeScopeDemo
