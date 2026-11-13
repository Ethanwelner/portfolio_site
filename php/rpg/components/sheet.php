<?php
// The character sheet's layout for Strange Frontiers: the sheet's lighter
// box with the level's blob on its corner, then its darker boxes, each in
// its place. One component, so the sheets can't drift apart.
//
// Player Tools' sheet is the reference. This draws the same markup as the
// creator's SheetLayout (strange-frontiers-character-creator
// src/app/components/sheet-layout.tsx), styled by the same stylesheet:
// css/sf-sheet.css here is a copy of the creator's src/app/sheet.css.
// Change the layout in the creator first, then bring the markup here and
// copy the stylesheet over.
//
//   level      the blob on the corner, and what sits on its corner
//   head       the portrait and name, then the description
//   resources  HP, VP, SP and MP
//   stats      the stat block (components/stats.php)
//   side       Movement and the resistances, over the Conditions and Items
//   lower      the Knowledges beside the Languages, then the Abilities
//              beside the Skills, then
//              any other Traits, contacts and features
//
// The layout fills each box with the HTML it's handed. Each sheet's
// context, under the same names as the creator's, sets rules for what it
// draws there, by where it sits in Strange Frontiers and how players use it
// (SF_SHEET_RULES; the creator's comment has the whole of each):
//
//   play    Player Tools, at the table: everything live
//   build   The Character Creator's Sheet step: the character as built
//   sample  The site's sample sheet, a finished character to read: all of
//           it, as it would look in play, with nothing to change
//
// The site's pages are static, so only sample is drawn here; a slot its
// rules don't allow (Level up, the play actions) isn't drawn even when
// handed one. Static, the side's Movement and resistances are drawn twice
// (.sf-sheet-row--twice), and the stylesheet shows the copy over the stats
// once the sheet is too narrow for the side beside them; the creator
// measures where the row wraps instead.
//
// sf_sheet_layout( array(
//   'context'      => 'sample',
//   'level'        => 6,
//   'who'          => '<img …><div class="sf-sheet-main">…</div>',
//   'description'  => '<p>…</p>',
//   'resources'    => sf_sheet_full_resources( … ),
//   'stats'        => (the stat block's HTML),
//   'movement'     => '10 m',
//   'resistances'  => (the resistances' title and list, or a function of
//                      the copy, 'a' or 'b', for their popovers' ids),
//   'conditions'   => …, 'items' => …,
//   'knowledges'   => …, 'languages' => …, 'abilities' => …, 'skills' => …,
//   'skills_aside' => (along the Skills title's line: the picks left),
//   'other'        => (other Traits, contacts and features, if any),
// ), array( 'class' => 'sample-sheet' ) );
//
// sf_sheet_capture() turns a component that echoes, like sf_stat_block(),
// into a slot's HTML.

if ( ! function_exists( 'sf_sheet_layout' ) ) {
	define(
		'SF_SHEET_RULES',
		array(
			'play'   => array( 'levelUp' => true, 'actions' => true, 'resources' => 'live', 'statMax' => false, 'statEdit' => true, 'edit' => true, 'addTraits' => true ),
			'build'  => array( 'levelUp' => false, 'actions' => false, 'resources' => 'full', 'statMax' => true, 'statEdit' => false, 'edit' => true, 'addTraits' => false ),
			'sample' => array( 'levelUp' => false, 'actions' => false, 'resources' => 'full', 'statMax' => true, 'statEdit' => false, 'edit' => false, 'addTraits' => false ),
		)
	);

	define(
		'SF_SHEET_RESOURCE_NAMES',
		array( 'hp' => 'Hit Points', 'vp' => 'Vibe Points', 'sp' => 'Savvy Points', 'mp' => 'Mana Points' )
	);

	function sf_sheet_e( $text ) {
		return htmlspecialchars( (string) $text, ENT_QUOTES, 'UTF-8' );
	}

	// What a component echoes, as HTML for a slot
	function sf_sheet_capture( $draw ) {
		ob_start();
		$draw();
		return ob_get_clean();
	}

	// A box's ruled title, with anything along its line after the rule. A
	// title row keeps its spacing even with nothing along it ($row), as the
	// Conditions' and Items' do with their Add buttons in the creator.
	function sf_sheet_title( $text, $aside = '', $tag = 'h3', $row = false, $icon = '' ) {
		// $icon: 'knowledge', 'language', 'skill', 'ability' or 'condition', the section's kind as an icon
		// before its name, like its cards', or 'backpack' for the Items
		if ( 'backpack' === $icon ) {
			$text = '<span class="sf-sheet-title-label"><svg class="icon icon-backpack sf-sheet-title-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true"><path d="M320 320H128c-17.62 0-32 14.38-32 32v32h256v-32C352 334.4 337.6 320 320 320zM96 512h256v-96H96V512zM320 80h-8V56C312 25.12 286.9 0 256 0H192C161.1 0 136 25.12 136 56V80H128c-70.75 0-128 57.25-128 128V448c0 35.38 28.62 64 64 64v-160c0-35.25 28.75-64 64-64h192c35.25 0 64 28.75 64 64v160c35.38 0 64-28.62 64-64V208C448 137.2 390.8 80 320 80zM184 56C184 51.62 187.6 48 192 48h64c4.375 0 8 3.625 8 8V80h-80V56zM320 200c0 4.375-3.625 8-8 8h-176C131.6 208 128 204.4 128 200v-16C128 179.6 131.6 176 136 176h176C316.4 176 320 179.6 320 184V200z"/></svg>' . $text . '</span>';
		} elseif ( $icon ) {
			require_once __DIR__ . '/cards.php';
			$text = '<span class="sf-sheet-title-label">' . sf_card_kind_icon( $icon, 'sf-sheet-title-icon' ) . $text . '</span>';
		}
		$title = '<' . $tag . ' class="sf-sheet-title">' . $text . '</' . $tag . '>';
		if ( '' === $aside && ! $row ) {
			return $title;
		}
		return '<div class="sf-sheet-title-row">' . $title . $aside . '</div>';
	}

	// HP, VP, SP and MP at their maximums, each name in its color with its
	// full name on hover: array( 'hp' => 17, 'vp' => 12, 'sp' => 9 )
	function sf_sheet_full_resources( $resources ) {
		$html = '<ul class="sf-resources">';
		foreach ( $resources as $id => $max ) {
			$html .= '<li class="sf-resource"><strong class="sf-resource-name resource-' . sf_sheet_e( $id ) . '" title="' . SF_SHEET_RESOURCE_NAMES[ $id ] . '">' . strtoupper( $id ) . '</strong>'
				. '<span class="sf-resource-value">' . (int) $max . '<span class="sf-resource-max"> / ' . (int) $max . '</span></span></li>';
		}
		return $html . '</ul>';
	}

	// Movement, from the Kind: a running figure (the creator's
	// person-running icon), then the number running into its unit, "10m"
	function sf_sheet_move_box( $movement ) {
		$value = sf_sheet_e( $movement );
		if ( preg_match( '/^\s*([\d.]+)\s*([a-z]+)\s*$/i', (string) $movement, $m ) ) {
			$value = sf_sheet_e( $m[1] ) . '<span class="sf-sheet-move-unit">' . sf_sheet_e( $m[2] ) . '</span>';
		}
		return '<div class="sf-sheet-box sf-sheet-move">' . sf_sheet_title( '<span title="Movement">Move</span>' )
			. '<div class="sf-sheet-move-value" title="Movement"><svg viewBox="0 0 448 512" role="img" aria-label="Movement" focusable="false"><title>Movement</title><path d="M400 224h-44l-26.12-53.25c-12.5-25.5-35.38-44.25-61.75-51L197 98.63C189.5 96.84 181.1 95.97 174.5 95.97c-20.88 0-41.33 6.81-58.26 19.78L76.5 146.3C68.31 152.5 64.01 162 64.01 171.6c0 17.11 13.67 32.02 32.02 32.02c6.808 0 13.67-2.158 19.47-6.616l39.63-30.38c5.92-4.488 13.01-6.787 19.53-6.787c2.017 0 3.981 .2196 5.841 .6623l14.62 4.25l-37.5 87.5C154.1 260.3 152.5 268.8 152.5 277.2c0 22.09 11.49 43.52 31.51 55.29l85 50.13l-27.5 87.75c-.9875 3.174-1.458 6.388-1.458 9.55c0 13.65 8.757 26.31 22.46 30.58C265.6 511.5 268.9 512 272 512c13.62 0 26.25-8.75 30.5-22.5l31.75-101c1.211-4.278 1.796-8.625 1.796-12.93c0-16.57-8.661-32.51-23.55-41.44l-61.13-36.12l31.25-78.38l20.25 41.5C310.9 277.4 327.9 288 345.1 288H400c17.62 0 32-14.38 32-32C432 238.3 417.6 224 400 224zM288 96c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48S261.5 96 288 96zM129.8 317.5L114.9 352H48c-17.62 0-32 14.38-32 32s14.38 32 32 32h77.5c19.25 0 36.5-11.5 44-29.12l8.875-20.5l-10.75-6.25C150.4 349.9 137.6 334.8 129.8 317.5z"/></svg>'
			. '<span class="sf-sheet-move-number">' . $value . '</span></div></div>';
	}

	function sf_sheet_layout( $s, $options = array() ) {
		$context = $s['context'] ?? 'sample';
		$rules   = SF_SHEET_RULES[ $context ];
		$class   = empty( $options['class'] ) ? '' : ' ' . sf_sheet_e( $options['class'] );
		$level   = (int) $s['level'];
		// The resistances, drawn twice: a function of the copy ('a' or 'b')
		// keeps their popovers' ids apart
		$move = function ( $copy ) use ( $s ) {
			$resistances = is_callable( $s['resistances'] ) ? $s['resistances']( $copy ) : $s['resistances'];
			return '<div class="sf-sheet-move-row">' . sf_sheet_move_box( $s['movement'] ?? '' )
				. '<div class="sf-sheet-box sf-sheet-resistances">' . $resistances . '</div></div>';
		};

		echo '<div class="sf-sheet sf-sheet--' . sf_sheet_e( $context ) . $class . '">';
		echo '<div class="sf-sheet-level" aria-label="Level ' . $level . '"><span class="sf-sheet-level-label">Level</span><span class="sf-sheet-level-number">' . $level . '</span></div>';
		if ( $rules['levelUp'] && ! empty( $s['corner'] ) ) {
			echo '<div class="sf-sheet-corner">' . $s['corner'] . '</div>';
		}
		if ( $rules['actions'] && ! empty( $s['actions'] ) ) {
			echo $s['actions'];
		}

		echo '<div class="sf-sheet-box sf-sheet-head"><div class="sf-sheet-who">' . $s['who'] . '</div>';
		if ( ! empty( $s['description'] ) ) {
			echo '<div class="sf-sheet-description">' . $s['description'] . '</div>';
		}
		echo '</div>';

		echo '<div class="sf-sheet-box sf-sheet-resources">' . $s['resources'] . '</div>';

		echo '<div class="sf-sheet-row sf-sheet-row--twice">' . $move( 'a' );
		echo '<div class="sf-sheet-box sf-sheet-stats">' . $s['stats'] . '</div>';
		echo '<div class="sf-sheet-side">' . $move( 'b' ) . '<div class="sf-sheet-side-row">';
		echo '<div class="sf-sheet-box sf-sheet-conditions">' . $s['conditions'] . '</div>';
		echo '<div class="sf-sheet-box sf-sheet-items">' . $s['items'] . '</div>';
		echo '</div></div></div>';

		echo '<div class="sf-sheet-lower">';
		echo '<div class="sf-sheet-pair sf-sheet-pair--lists">';
		echo '<div class="sf-sheet-box sf-sheet-knowledges">' . sf_sheet_title( 'Knowledges', '', 'h3', false, 'knowledge' ) . $s['knowledges'] . '</div>';
		echo '<div class="sf-sheet-box sf-sheet-languages">' . sf_sheet_title( 'Languages', '', 'h3', false, 'language' ) . $s['languages'] . '</div>';
		echo '</div>';
		echo '<div class="sf-sheet-pair">';
		echo '<div class="sf-sheet-box sf-sheet-abilities">' . sf_sheet_title( 'Abilities', '', 'h3', false, 'ability' ) . $s['abilities'] . '</div>';
		echo '<div class="sf-sheet-box sf-sheet-skills">' . sf_sheet_title( 'Skills', $s['skills_aside'] ?? '', 'h3', false, 'skill' ) . $s['skills'] . '</div>';
		echo '</div>';
		if ( ! empty( $s['other'] ) ) {
			echo '<div class="sf-sheet-box sf-sheet-other">' . $s['other'] . '</div>';
		}
		echo '</div></div>';
	}
}
