import type { Component } from 'solid-js'
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
// Scope classes — applied to container divs to establish the active theme.
import { bootstrapScope } from '../../themes/bootstrap/scope.css'
// Layered scope classes — separate hashes used by the @layer demo (section 5)
// to avoid interference from the non-layered styles above.
import { bootstrapScopeL } from '../../themes/bootstrap/scope.layer.css'
import { sketchyScope } from '../../themes/sketchy/scope.css'
import { sketchyScopeL } from '../../themes/sketchy/scope.layer.css'

// Side-effect imports: register globalStyle rules that map
//   themeScope + contractClass  →  actual CSS
// Bootstrap styles are imported first so that Sketchy (imported second) wins
// whenever both scopes match a button, which is the correct behaviour for the
// "Bootstrap outer / Sketchy inner" nesting example below.
import '../../themes/bootstrap/ui/buttons/styles.css'
import '../../themes/sketchy/ui/buttons/styles.css'

// @layer-based styles for section 5.
// Import order establishes layer priority: bootstrap < sketchy < nestedBootstrap.
import '../../themes/bootstrap/ui/buttons/styles-layer.css'
import '../../themes/sketchy/ui/buttons/styles-layer.css'
import '../../themes/bootstrap/ui/buttons/styles-nested.css'

const Buttons: Component = () => (
	<>
		<button type="button" class={`${btn} ${btnPrimary}`}>
			Primary
		</button>{' '}
		<button type="button" class={`${btn} ${btnSecondary}`}>
			Secondary
		</button>{' '}
		<button type="button" class={`${btn} ${btnSuccess}`}>
			Success
		</button>{' '}
		<button type="button" class={`${btn} ${btnDanger}`}>
			Danger
		</button>{' '}
		<button type="button" class={`${btn} ${btnWarning}`}>
			Warning
		</button>{' '}
		<button type="button" class={`${btn} ${btnInfo}`}>
			Info
		</button>
	</>
)

const sectionStyle = {
	'border-left': '4px solid #dee2e6',
	'padding-left': '1rem',
	'margin-bottom': '2rem',
}

const PocThemeScopeDemo: Component = () => (
	<div style={{ 'font-family': 'system-ui, sans-serif', padding: '2rem', 'max-width': '900px' }}>
		<h1>Contract Classes + Theme Scope — PoC</h1>
		<p>
			Every <code>&lt;button&gt;</code> below carries the <em>same</em> contract class names (
			<code>btn</code>, <code>btnPrimary</code>, …). The <strong>theme scope class</strong> on
			the container selects which theme's styles apply — no runtime resolver needed for
			element names.
		</p>

		<h2>1. Bootstrap theme</h2>
		<div style={sectionStyle}>
			<div class={bootstrapScope}>
				<Buttons />
			</div>
		</div>

		<h2>2. Sketchy theme</h2>
		<p style={{ 'font-size': '0.875rem', color: '#6c757d' }}>
			Note: Neucha font loads from Google Fonts if available; otherwise a generic cursive is
			used. The hand-drawn border-radius is always present.
		</p>
		<div style={sectionStyle}>
			<div class={sketchyScope}>
				<Buttons />
			</div>
		</div>

		<h2>3. Nested — Bootstrap (outer) wrapping Sketchy (inner)</h2>
		<p style={{ 'font-size': '0.875rem', color: '#6c757d' }}>
			The outer row uses Bootstrap styles; the inner row uses Sketchy. Both rows use identical{' '}
			<code>&lt;Buttons /&gt;</code> — only the scope class on the wrapper changes.
		</p>
		<div style={sectionStyle}>
			<div class={bootstrapScope}>
				<p style={{ margin: '0 0 0.5rem', 'font-size': '0.75rem', color: '#6c757d' }}>
					bootstrap scope (outer)
				</p>
				<Buttons />
				<div class={sketchyScope} style={{ 'margin-top': '0.75rem' }}>
					<p style={{ margin: '0 0 0.5rem', 'font-size': '0.75rem', color: '#6c757d' }}>
						sketchy scope (inner — overrides bootstrap for its descendants)
					</p>
					<Buttons />
				</div>
			</div>
		</div>

		<h2>4. Nested — Sketchy (outer) wrapping Bootstrap (inner)</h2>
		<p style={{ 'font-size': '0.875rem', color: '#6c757d' }}>
			⚠ With equal CSS specificity and Sketchy styles defined <em>last</em> in the stylesheet,
			Sketchy wins for all buttons regardless of nesting direction. The inner Bootstrap row
			below still shows Sketchy styling. Section 5 below shows how <code>@layer</code> fixes
			this.
		</p>
		<div style={sectionStyle}>
			<div class={sketchyScope}>
				<p style={{ margin: '0 0 0.5rem', 'font-size': '0.75rem', color: '#6c757d' }}>
					sketchy scope (outer)
				</p>
				<Buttons />
				<div class={bootstrapScope} style={{ 'margin-top': '0.75rem' }}>
					<p style={{ margin: '0 0 0.5rem', 'font-size': '0.75rem', color: '#6c757d' }}>
						bootstrap scope (inner — currently styled as Sketchy due to equal
						specificity)
					</p>
					<Buttons />
				</div>
			</div>
		</div>

		<h2>5. @layer — Reverse nesting solved</h2>
		<p>
			Using VE's <code>@layer</code> support, each theme's styles are placed in a named CSS
			cascade layer. The layer order is established by import sequence:
		</p>
		<ol style={{ 'font-size': '0.875rem', 'line-height': 2 }}>
			<li>
				<code>styles-layer.css.ts</code> (bootstrap) imported first →{' '}
				<code>@layer bootstrap</code> declared first → <strong>lowest priority</strong>
			</li>
			<li>
				<code>styles-layer.css.ts</code> (sketchy) imported second →{' '}
				<code>@layer sketchy</code> declared second → <strong>middle priority</strong>
			</li>
			<li>
				<code>styles-nested.css.ts</code> (bootstrap-in-sketchy overrides) imported last →{' '}
				<code>@layer nestedBootstrap</code> declared last →{' '}
				<strong>highest priority</strong>
			</li>
		</ol>
		<p style={{ 'font-size': '0.875rem', color: '#6c757d' }}>
			The <code>nestedBootstrap</code> layer carries explicit two-scope selectors (
			<code>.sketchyScopeL .bootstrapScopeL .btn</code>). Because its layer is declared after{' '}
			<code>@layer sketchy</code>, it wins regardless of specificity — this is the key
			advantage of <code>@layer</code>: cascade priority is decoupled from selector
			specificity.
		</p>

		<h3 style={{ 'margin-bottom': '0.25rem' }}>
			5a. Bootstrap outer + Sketchy inner (still works ✓)
		</h3>
		<p style={{ 'font-size': '0.875rem', color: '#6c757d', 'margin-top': 0 }}>
			<code>@layer sketchy</code> &gt; <code>@layer bootstrap</code> → Sketchy wins for inner
			buttons.
		</p>
		<div style={sectionStyle}>
			<div class={bootstrapScopeL}>
				<p style={{ margin: '0 0 0.5rem', 'font-size': '0.75rem', color: '#6c757d' }}>
					bootstrapScopeL (outer) — layered
				</p>
				<Buttons />
				<div class={sketchyScopeL} style={{ 'margin-top': '0.75rem' }}>
					<p style={{ margin: '0 0 0.5rem', 'font-size': '0.75rem', color: '#6c757d' }}>
						sketchyScopeL (inner) — Sketchy wins ✓
					</p>
					<Buttons />
				</div>
			</div>
		</div>

		<h3 style={{ 'margin-bottom': '0.25rem' }}>
			5b. Sketchy outer + Bootstrap inner (now works ✓)
		</h3>
		<p style={{ 'font-size': '0.875rem', color: '#6c757d', 'margin-top': 0 }}>
			<code>@layer nestedBootstrap</code> &gt; <code>@layer sketchy</code> → Bootstrap wins
			for inner buttons, even though Sketchy scope is an ancestor.
		</p>
		<div style={sectionStyle}>
			<div class={sketchyScopeL}>
				<p style={{ margin: '0 0 0.5rem', 'font-size': '0.75rem', color: '#6c757d' }}>
					sketchyScopeL (outer) — layered
				</p>
				<Buttons />
				<div class={bootstrapScopeL} style={{ 'margin-top': '0.75rem' }}>
					<p style={{ margin: '0 0 0.5rem', 'font-size': '0.75rem', color: '#6c757d' }}>
						bootstrapScopeL (inner) — Bootstrap wins ✓ (reverse nesting solved)
					</p>
					<Buttons />
				</div>
			</div>
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
						One class per theme; applied to a container to select the active theme
					</td>
				</tr>
				<tr>
					<td style={{ border: '1px solid #dee2e6', padding: '0.5rem' }}>Styles</td>
					<td style={{ border: '1px solid #dee2e6', padding: '0.5rem' }}>
						<code>themes/*/ui/…/styles.css.ts</code>
					</td>
					<td style={{ border: '1px solid #dee2e6', padding: '0.5rem' }}>
						<code>globalStyle(scope + contract, cssProps)</code> — real CSS, scoped to
						theme
					</td>
				</tr>
				<tr>
					<td style={{ border: '1px solid #dee2e6', padding: '0.5rem' }}>Component</td>
					<td style={{ border: '1px solid #dee2e6', padding: '0.5rem' }}>
						<code>components/…/*.tsx</code>
					</td>
					<td style={{ border: '1px solid #dee2e6', padding: '0.5rem' }}>
						Uses only contract classes; knows nothing about themes
					</td>
				</tr>
			</tbody>
		</table>
	</div>
)

export default PocThemeScopeDemo
