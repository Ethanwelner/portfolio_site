// Usage: node scripts/dreftian-backgrounds.cjs ~/strange-frontiers-character-creator php/rpg/dreftian-backgrounds.json
// Rerun when the creator's Dreftian Kinds, Professions or Pasts, or its Isekai Origins, change.
// Builds the Building a Dreftian cards' data from the creator's content,
// in the shape of the site's sample-character.json backgrounds.
const fs = require('fs'), path = require('path');
const Y = require(path.join(process.argv[2], 'node_modules/yaml'));
const C = path.join(process.argv[2], 'content');
const read = (p) => Y.parse(fs.readFileSync(p, 'utf8'));
const dir = (d) => fs.readdirSync(d).filter((f) => f.endsWith('.yaml')).sort().map((f) => read(path.join(d, f)));
const traits = {};
for (const c of fs.readdirSync(path.join(C, 'traits'))) for (const t of dir(path.join(C, 'traits', c))) traits[t.id] = t;
const tname = (id) => { const t = traits[id]; if (!t) throw new Error('no trait ' + id); return t.name; };
// "English (Spoken)" and its Written pair become "English (Spoken & Written)"
function names(ids, ranks = {}) {
  const out = []; const seen = new Set(ids);
  for (const id of ids) {
    const t = traits[id];
    if (t && t.language) {
      const spoken = t.language, written = t.language + '-written';
      if (id === written && seen.has(spoken)) continue;
      if (id === spoken && seen.has(written)) { out.push(t.name.replace(/\s*\(Spoken\)$/, '') + ' (Spoken & Written)'); continue; }
    }
    out.push(tname(id) + (ranks[id] ? ' (' + ranks[id] + ')' : ''));
  }
  return out;
}
const cap = (s) => s[0].toUpperCase() + s.slice(1);
// A Background Keyword as the creator shows it: "american-empire" reads "American Empire"
const keyword = (k) => ({ sdu: 'SDU', un: 'UN' })[k] || k.split('-').map(cap).join(' ');
function pkg(p, slot) {
  const ranks = {}; (p.grants || []).forEach((g) => { if (g.rank) ranks[g.trait] = g.rank; });
  const bonus = [
    ...(p.bonusPoints || []).map((b) => `+${b.count} ${cap(b.group)} focus point${b.count > 1 ? 's' : ''}`),
    ...Object.entries(p.coreBonus || {}).map(([k, v]) => `+${v} ${cap(k)}`),
    ...Object.entries(p.resources || {}).map(([k, v]) => `+${v} ${k.toUpperCase()}`),
  ];
  return {
    id: p.id, slot, name: p.name, plane: p.plane, summary: p.summary, lore: p.lore || '',
    features: (p.features || []).map((f) => ({ name: f.name, description: f.description })),
    bonus, grants: names((p.grants || []).map((g) => g.trait), ranks),
    choices: (p.choices || []).map((c) => c.note || `Choose ${c.choose} ${c.from}`),
    backgroundKeywords: (p.backgroundKeywords || []).map(keyword),
    ...(p.stats ? { stats: p.stats } : {}),
  };
}
const out = {
  kinds: dir(path.join(C, 'kinds/dreft')).map((k) => pkg(k, 'Kind')),
  // Every Origin on Isekai: Dreft first, then its neighbors
  origins: fs.readdirSync(path.join(C, 'origins')).flatMap((d) => dir(path.join(C, 'origins', d)))
    .filter((o) => o.plane === 'isekai')
    .sort((a, b) => (b.region === 'dreft') - (a.region === 'dreft') || a.name.localeCompare(b.name))
    .map((k) => pkg(k, 'Origin')),
  professions: dir(path.join(C, 'professions/dreft')).map((k) => pkg(k, 'Profession')),
  pasts: dir(path.join(C, 'pasts/dreft')).map((k) => pkg(k, 'Past')),
};
fs.writeFileSync(process.argv[3], JSON.stringify(out, null, '\t') + '\n');
console.log(Object.entries(out).map(([k, v]) => k + ' ' + v.length).join(', '));
