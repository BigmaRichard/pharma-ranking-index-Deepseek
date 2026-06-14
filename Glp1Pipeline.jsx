import React from 'react';

/**
 * GLP-1 在研管线数据（Phase 3 及以前，未上市）
 * 国际主流药企 + 中国 Biotech
 * 更新至 2026-06
 */

// ======================= 数据类型定义 =======================
export const PHASE = {
  PHASE_3: 'phase3',
  PHASE_2: 'phase2',
  PHASE_1: 'phase1',
  PRECLINICAL: 'preclinical',
  APPROVED: 'approved',
  DISCONTINUED: 'discontinued',
};

const COUNTRY = {
  US: '🇺🇸',
  DK: '🇩🇰',
  DE: '🇩🇪',
  CH: '🇨🇭',
  CN: '🇨🇳',
  JP: '🇯🇵',
  FR: '🇫🇷',
};

// ======================= 管线数据 =======================

/** Phase 3 注册性临床 */
export const phase3Pipeline = [
  {
    drug: 'Retatrutide',
    code: 'LY-3437943',
    company: 'Eli Lilly',
    country: COUNTRY.US,
    mechanism: 'GLP-1 / GIP / GCGR 三靶激动',
    route: '皮下注射 周制剂',
    indications: ['肥胖', 'T2DM', 'MASH', 'CKD'],
    notes: 'TRIUMPH 系列多适应症推进中',
  },
  {
    drug: 'CagriSema',
    code: '卡格列肽 + 司美格鲁肽',
    company: 'Novo Nordisk',
    country: COUNTRY.DK,
    mechanism: 'GLP-1 + Amylin / Calcitonin 双靶',
    route: '皮下注射 周制剂',
    indications: ['肥胖', 'T2DM'],
    notes: 'REDEFINE-1/-2 NEJM 2025；减重 ~20%，预计近期申报',
  },
  {
    drug: 'Survodutide',
    code: 'BI 456906',
    company: 'Boehringer Ingelheim',
    country: COUNTRY.DE,
    mechanism: 'GLP-1 / GCGR 双靶激动',
    route: '皮下注射 周制剂',
    indications: ['肥胖', 'MASH'],
    notes: 'MASH 和肥胖双线 Phase 3 推进',
  },
  {
    drug: 'HRS-9531',
    code: '—',
    company: '恒瑞医药 (福建盛迪)',
    country: COUNTRY.CN,
    mechanism: 'GLP-1 / GIP 双靶激动',
    route: '皮下注射 周制剂',
    indications: ['肥胖', 'T2DM'],
    notes: '中国 Phase 3，多项注册试验进行中',
  },
  {
    drug: 'GZR18',
    code: '—',
    company: '甘李药业',
    country: COUNTRY.CN,
    mechanism: 'GLP-1 单靶激动',
    route: '皮下注射 周制剂',
    indications: ['肥胖', 'T2DM'],
    notes: 'Phase 3 进行中 (BWM-303 等)',
  },
];

/** Phase 2 概念验证 / 剂量探索 */
export const phase2Pipeline = [
  {
    drug: 'Maridebart cafraglutide',
    code: 'AMG 133 / MariTide',
    company: 'Amgen',
    country: COUNTRY.US,
    mechanism: 'GLP-1R 激动 + GIPR 拮抗（抗体-肽偶联）',
    route: '皮下注射 月制剂',
    indications: ['肥胖'],
    notes: 'Phase 2 数据积极，进入 Phase 2b/3；超长效',
  },
  {
    drug: 'Pemvidutide',
    code: 'ALT-801',
    company: 'Altimmune',
    country: COUNTRY.US,
    mechanism: 'GLP-1 / GCGR 双靶激动',
    route: '皮下注射 周制剂',
    indications: ['肥胖', 'MASH', 'AUD', 'ALD'],
    notes: 'Phase 2 MASH 数据 2025.6 读出；降 LDL-C 显著',
  },
  {
    drug: 'VK2735',
    code: '—',
    company: 'Viking Therapeutics',
    country: COUNTRY.US,
    mechanism: 'GLP-1 / GIP 双靶激动',
    route: '皮下注射 + 口服',
    indications: ['肥胖', 'T2DM'],
    notes: '注射和口服双剂型并行开发',
  },
  {
    drug: 'Aleniglipron',
    code: 'GSBR-1290',
    company: 'Structure Therapeutics',
    country: COUNTRY.US,
    mechanism: 'GLP-1 小分子',
    route: '口服',
    indications: ['肥胖', 'T2DM'],
    notes: 'Phase 2a 结果积极；非肽类口服 GLP-1',
  },
  {
    drug: 'Amycretin / Zenagamtide',
    code: 'NN 9487',
    company: 'Novo Nordisk',
    country: COUNTRY.DK,
    mechanism: 'GLP-1 / Amylin 双靶共激动',
    route: '口服 + 皮下注射',
    indications: ['肥胖'],
    notes: 'I/IIa 减重显著（口服 12 周 ~13%）；双剂型开发',
  },
  {
    drug: 'CT-388',
    code: '—',
    company: 'Roche / Genentech',
    country: COUNTRY.CH,
    mechanism: 'GLP-1 / GIP 双靶偏向激动（无 β-arrestin 偶联）',
    route: '皮下注射 周制剂',
    indications: ['肥胖'],
    notes: '罗氏减重管线核心资产，Phase 1b/2',
  },
  {
    drug: 'CT-868',
    code: 'RG-6641',
    company: 'Roche / Genentech',
    country: COUNTRY.CH,
    mechanism: 'GLP-1 / GIP 双靶偏向激动',
    route: '皮下注射',
    indications: ['T2DM', '肥胖'],
    notes: 'Phase 2 进行中',
  },
  {
    drug: 'Cotadutide',
    code: 'MEDI-0382',
    company: 'AstraZeneca',
    country: '🇬🇧',
    mechanism: 'GLP-1 / GCGR 双靶激动',
    route: '皮下注射',
    indications: ['T2DM', '肥胖'],
    notes: 'Phase 2，进度可能放缓',
  },
  {
    drug: 'Dapiglutide',
    code: 'ZP 7570',
    company: 'Zealand Pharma',
    country: COUNTRY.DK,
    mechanism: 'GLP-1 / GLP-2 双靶激动',
    route: '皮下注射 周制剂',
    indications: ['短肠综合征', '肥胖'],
    notes: 'Phase 2',
  },
  {
    drug: 'TG103',
    code: '—',
    company: '石药集团 (CSPC)',
    country: COUNTRY.CN,
    mechanism: 'GLP-1 Fc 融合蛋白',
    route: '皮下注射',
    indications: ['T2DM', '肥胖'],
    notes: '中国 Phase 2',
  },
  {
    drug: 'HEC88473',
    code: '—',
    company: '东阳光药 (HEC Pharm)',
    country: COUNTRY.CN,
    mechanism: 'GLP-1 / FGF21 双靶激动',
    route: '皮下注射',
    indications: ['T2DM', 'NASH'],
    notes: 'Phase 2',
  },
  {
    drug: 'UBT-251',
    code: '—',
    company: '联邦制药 / 阳光湖',
    country: COUNTRY.CN,
    mechanism: 'GLP-1 / GIP / GCGR 三靶激动',
    route: '皮下注射',
    indications: ['肥胖'],
    notes: 'Phase I/II；24w 体重下降 ~19.7%',
  },
  {
    drug: 'PB-119',
    code: '聚乙二醇化艾塞那肽',
    company: '派格生物 (PegBio)',
    country: COUNTRY.CN,
    mechanism: 'GLP-1 单靶长效',
    route: '皮下注射',
    indications: ['T2DM'],
    notes: 'Phase II/III，NDA 可能已递交',
  },
];

/** Phase 1 / 早期临床 */
export const phase1Pipeline = [
  {
    drug: 'XW004',
    code: '—',
    company: '先为达 (Sciwind)',
    country: COUNTRY.CN,
    mechanism: 'GLP-1 口服多肽',
    route: '口服',
    indications: ['肥胖'],
    notes: 'Phase 1',
  },
  {
    drug: 'XW014',
    code: '—',
    company: '先为达 (Sciwind)',
    country: COUNTRY.CN,
    mechanism: 'GLP-1 小分子',
    route: '口服',
    indications: ['肥胖'],
    notes: 'Phase 1',
  },
  {
    drug: 'AZD9550',
    code: '—',
    company: 'AstraZeneca',
    country: '🇬🇧',
    mechanism: 'GLP-1 / GCGR 双靶激动',
    route: '皮下注射',
    indications: ['肥胖', 'MASH'],
    notes: 'Phase I/II',
  },
  {
    drug: 'RGT-075',
    code: '—',
    company: 'Regor Therapeutics / Lilly',
    country: COUNTRY.US,
    mechanism: 'GLP-1 小分子',
    route: '口服',
    indications: ['肥胖', 'T2DM'],
    notes: 'Phase I/II',
  },
  {
    drug: 'PF-07081532',
    code: '—',
    company: 'Pfizer',
    country: COUNTRY.US,
    mechanism: 'GLP-1 小分子（二代）',
    route: '口服',
    indications: ['肥胖', 'T2DM'],
    notes: 'Danuglipron 终止后后续分子；Phase I/II',
  },
  {
    drug: 'SCO-094',
    code: '—',
    company: 'Scohia Pharma',
    country: COUNTRY.JP,
    mechanism: 'GLP-1 / GIP 双靶激动',
    route: '皮下注射',
    indications: ['T2DM', '肥胖'],
    notes: 'Phase 1',
  },
  {
    drug: 'NN-9541',
    code: '—',
    company: 'Novo Nordisk',
    country: COUNTRY.DK,
    mechanism: 'GLP-1 / GIP 口服双靶',
    route: '口服',
    indications: ['肥胖', 'T2DM'],
    notes: 'Novo 下一代口服双靶',
  },
  {
    drug: 'CagriSema 口服',
    code: '—',
    company: 'Novo Nordisk',
    country: COUNTRY.DK,
    mechanism: 'GLP-1 + Amylin 口服',
    route: '口服',
    indications: ['肥胖'],
    notes: 'CagriSema 口服版探索',
  },
  {
    drug: 'HS-20094',
    code: '—',
    company: '翰森制药',
    country: COUNTRY.CN,
    mechanism: 'GLP-1 / GIP 双靶激动',
    route: '皮下注射',
    indications: ['肥胖', 'T2DM'],
    notes: '中国 I/II 期',
  },
  {
    drug: 'HDM-1002',
    code: '—',
    company: '华东医药',
    country: COUNTRY.CN,
    mechanism: 'GLP-1 小分子',
    route: '口服',
    indications: ['肥胖', 'T2DM'],
    notes: '口服 GLP-1 I 期',
  },
  {
    drug: 'SAL-0112',
    code: '—',
    company: '信立泰',
    country: COUNTRY.CN,
    mechanism: 'GLP-1 小分子',
    route: '口服',
    indications: ['T2DM', '肥胖'],
    notes: '口服 GLP-1 I 期',
  },
  {
    drug: 'MWN-101',
    code: '—',
    company: '民为生物',
    country: COUNTRY.CN,
    mechanism: 'GLP-1 / GIP / GCGR 三靶激动',
    route: '皮下注射',
    indications: ['肥胖'],
    notes: '中国三靶 I 期',
  },
];

/** 中国临床前阶段 */
export const preclinicalCN = [
  { company: '博瑞医药', drug: 'BGM-0504', mechanism: 'GLP-1 / GIP 双靶', notes: '2025 年 IND，进入临床' },
  { company: '众生药业', drug: 'RAY-1225', mechanism: 'GLP-1 / GIP 双靶', notes: '临床前 / IND 阶段' },
  { company: '齐鲁制药', drug: 'QL-GLP-1 系列', mechanism: 'GLP-1 生物类似药 + 改良', notes: '司美格鲁肽仿制 + 改良型管线' },
  { company: '正大天晴', drug: 'TQ-351', mechanism: 'GLP-1 单靶', notes: '临床前推进中' },
  { company: '凯因科技', drug: 'KW-021', mechanism: 'GLP-1 长效', notes: '长效融合蛋白' },
  { company: '双鹭药业', drug: 'SL-GLP-1', mechanism: 'GLP-1 长效融合蛋白', notes: '临床前 / IND 准备' },
  { company: '复星医药', drug: '多个改良型 GLP-1', mechanism: 'GLP-1 长效 / 多靶', notes: '临床前管线储备' },
  { company: '科伦药业', drug: 'KL-GLP-1', mechanism: 'GLP-1 生物类似药', notes: '临床前' },
  { company: '通化东宝', drug: 'TH-GLP-1 系列', mechanism: 'GLP-1 类似药 + 改良', notes: '仿制 + 创新双线' },
  { company: '四环医药', drug: '多肽 GLP-1 平台', mechanism: 'GLP-1 / GIP 双靶', notes: '临床前平台建设' },
];

/** 近期上市（2025-2026 新获批） */
export const recentlyApproved = [
  { drug: 'Orforglipron', brand: 'Foundayo', company: 'Eli Lilly', mechanism: 'GLP-1 口服小分子', date: '2026.04', region: '美国 FDA' },
  { drug: 'Mazdutide', brand: 'IBI362', company: '信达生物 / Lilly', mechanism: 'GLP-1 / GCGR 双靶', date: '2025.06', region: '中国 NMPA' },
  { drug: 'Ecnoglutide', brand: 'XW003', company: '先为达 Sciwind', mechanism: 'GLP-1 周制剂', date: '2026.01', region: '中国 NMPA' },
  { drug: 'IcoSema', brand: 'Kyinsu', company: 'Novo Nordisk', mechanism: '胰岛素 + GLP-1 复方', date: '2025.11', region: 'EU EMA' },
];

/** 已终止管线 */
export const discontinued = [
  { drug: 'Danuglipron', company: 'Pfizer', reason: '不可预测的肝毒性', year: '2024' },
  { drug: 'Lotiglipron', company: 'Pfizer', reason: '肝酶升高，潜在肝毒性', year: '2023' },
  { drug: 'Taspoglutide', company: 'Roche / Ipsen', reason: '严重超敏反应 + 胃肠道副作用', year: '2010' },
  { drug: 'NNC9204-1706', company: 'Novo Nordisk', reason: '安全性不佳（三靶激动剂）', year: '2022' },
  { drug: 'Efpeglenatide', company: 'Sanofi', reason: '战略调整 / 商业考量', year: '2021' },
];

// ======================= React 组件 =======================

const styles = {
  container: {
    maxWidth: 1400,
    margin: '0 auto',
    padding: 20,
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif",
    background: '#f5f7fa',
    minHeight: '100vh',
    color: '#1a1a1a',
    lineHeight: 1.6,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 800,
    color: '#0f172a',
    margin: '24px 0 8px',
  },
  subtitle: {
    textAlign: 'center',
    color: '#555',
    fontSize: 14,
    marginBottom: 32,
  },
  section: {
    background: '#fff',
    borderRadius: 12,
    boxShadow: '0 1px 3px rgba(0,0,0,.06)',
    marginBottom: 24,
    overflow: 'hidden',
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '16px 20px',
    fontSize: 18,
    fontWeight: 700,
    borderBottom: '1px solid #e0e4e8',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: 13,
  },
  theadTh: {
    background: '#f8fafc',
    padding: '10px 12px',
    textAlign: 'left',
    fontWeight: 600,
    fontSize: 12,
    color: '#555',
    borderBottom: '2px solid #e0e4e8',
    position: 'sticky',
    top: 0,
    whiteSpace: 'nowrap',
  },
  tbodyTd: {
    padding: '10px 12px',
    borderBottom: '1px solid #f1f3f5',
    verticalAlign: 'top',
  },
  drugName: { fontWeight: 600, color: '#2563eb', whiteSpace: 'nowrap' },
  drugCode: { fontSize: 11, color: '#555', display: 'block', marginTop: 1 },
  company: { fontWeight: 500 },
  countryTag: { fontSize: 10, padding: '1px 6px', borderRadius: 10, background: '#f1f5f9', color: '#64748b', marginLeft: 4 },
  mechanism: { fontSize: 12, lineHeight: 1.4 },
  route: { textAlign: 'center', fontSize: 12, whiteSpace: 'nowrap' },
  notes: { fontSize: 11, color: '#555', maxWidth: 280 },
  footer: { textAlign: 'center', color: '#94a3b8', fontSize: 12, margin: '32px 0 16px' },
};

const BADGE_COLORS = {
  phase3: { bg: '#ecfdf5', color: '#059669' },
  phase2: { bg: '#fffbeb', color: '#d97706' },
  phase1: { bg: '#f5f3ff', color: '#7c3aed' },
  preclinical: { bg: '#f9fafb', color: '#6b7280' },
  approved: { bg: '#e0f2fe', color: '#0891b2' },
  discontinued: { bg: '#fef2f2', color: '#dc2626' },
};

function Badge({ type, label }) {
  const c = BADGE_COLORS[type] || BADGE_COLORS.preclinical;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', padding: '2px 10px', borderRadius: 20, fontSize: 12, fontWeight: 600, background: c.bg, color: c.color }}>
      {label}
    </span>
  );
}

function SummaryCard({ count, label }) {
  return (
    <div style={{ background: '#fff', borderRadius: 12, padding: '16px 20px', boxShadow: '0 1px 3px rgba(0,0,0,.06)', textAlign: 'center' }}>
      <div style={{ fontSize: 32, fontWeight: 800, color: '#2563eb' }}>{count}</div>
      <div style={{ fontSize: 13, color: '#555', marginTop: 4 }}>{label}</div>
    </div>
  );
}

function PipelineTable({ columns, data }) {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          {columns.map((col, i) => (
            <th key={i} style={styles.theadTh}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} style={{ ':hover': { background: '#fafbfc' } }}>
            {Object.values(row).map((cell, j) => (
              <td key={j} style={styles.tbodyTd}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/**
 * 主组件 —— GLP-1 管线总览页面
 */
export default function Glp1Pipeline() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>GLP-1 受体激动剂 / 多靶点在研管线汇总</h1>
      <p style={styles.subtitle}>国际主流药企 + 中国 Biotech · Phase 3 及以前未上市品种 · 更新至 2026 年 6 月</p>

      {/* 统计卡片 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 24 }}>
        <SummaryCard count={5} label="Phase 3 在研" />
        <SummaryCard count={13} label="Phase 2 在研" />
        <SummaryCard count={12} label="Phase 1 在研" />
        <SummaryCard count={10} label="临床前 (中国)" />
      </div>

      {/* Phase 3 */}
      <Section title={<><Badge type="phase3" label="Phase 3" /> 注册性临床</>}>
        <PipelineTable
          columns={['药物', '代码', '公司', '靶点 / 机制', '给药途径', '适应症', '备注']}
          data={phase3Pipeline.map(r => ({
            drug: <><span style={styles.drugName}>{r.drug}</span><span style={styles.drugCode}>{r.code}</span></>,
            code: r.code,
            company: <span>{r.company} <span style={styles.countryTag}>{r.country}</span></span>,
            mechanism: <span style={styles.mechanism}>{r.mechanism}</span>,
            route: <span style={styles.route}>{r.route}</span>,
            indications: r.indications.join(' / '),
            notes: <span style={styles.notes}>{r.notes}</span>,
          }))}
        />
      </Section>

      {/* Phase 2 */}
      <Section title={<><Badge type="phase2" label="Phase 2" /> 概念验证 / 剂量探索</>}>
        <PipelineTable
          columns={['药物', '代码', '公司', '靶点 / 机制', '给药途径', '适应症', '备注']}
          data={phase2Pipeline.map(r => ({
            drug: <><span style={styles.drugName}>{r.drug}</span><span style={styles.drugCode}>{r.code}</span></>,
            code: r.code,
            company: <span>{r.company} <span style={styles.countryTag}>{r.country}</span></span>,
            mechanism: <span style={styles.mechanism}>{r.mechanism}</span>,
            route: <span style={styles.route}>{r.route}</span>,
            indications: r.indications.join(' / '),
            notes: <span style={styles.notes}>{r.notes}</span>,
          }))}
        />
      </Section>

      {/* Phase 1 */}
      <Section title={<><Badge type="phase1" label="Phase 1" /> 早期临床 / IND</>}>
        <PipelineTable
          columns={['药物', '代码', '公司', '靶点 / 机制', '给药途径', '适应症', '备注']}
          data={phase1Pipeline.map(r => ({
            drug: <><span style={styles.drugName}>{r.drug}</span><span style={styles.drugCode}>{r.code}</span></>,
            code: r.code,
            company: <span>{r.company} <span style={styles.countryTag}>{r.country}</span></span>,
            mechanism: <span style={styles.mechanism}>{r.mechanism}</span>,
            route: <span style={styles.route}>{r.route}</span>,
            indications: r.indications.join(' / '),
            notes: <span style={styles.notes}>{r.notes}</span>,
          }))}
        />
      </Section>

      {/* 临床前 */}
      <Section title={<><Badge type="preclinical" label="临床前" /> 中国代表性企业（IND 申报 / 临床前阶段）</>}>
        <PipelineTable
          columns={['企业', '候选药物', '靶点 / 机制', '特点']}
          data={preclinicalCN.map(r => ({
            company: <span style={styles.company}>{r.company}</span>,
            drug: r.drug,
            mechanism: r.mechanism,
            notes: <span style={styles.notes}>{r.notes}</span>,
          }))}
        />
      </Section>

      {/* 近期上市 */}
      <Section title={<><Badge type="approved" label="近期上市" /> 2025–2026 年新获批 GLP-1 产品（不纳入在研管线）</>}>
        <PipelineTable
          columns={['药物', '商品名', '公司', '靶点', '批准时间', '地区']}
          data={recentlyApproved.map(r => ({
            drug: <span style={styles.drugName}>{r.drug}</span>,
            brand: r.brand,
            company: r.company,
            mechanism: r.mechanism,
            date: r.date,
            region: r.region,
          }))}
        />
      </Section>

      {/* 已终止 */}
      <Section title={<><Badge type="discontinued" label="已终止" /> 代表性失败 / 放弃的管线</>}>
        <PipelineTable
          columns={['药物', '公司', '终止原因', '年份']}
          data={discontinued.map(r => ({
            drug: <span style={styles.drugName}>{r.drug}</span>,
            company: r.company,
            reason: <span style={styles.notes}>{r.reason}</span>,
            year: r.year,
          }))}
        />
      </Section>

      <p style={styles.footer}>
        数据来源：Wikipedia · ClinicalTrials.gov · 公司公告 · 行业公开报道<br />
        临床前中国管线基于公开信息披露，可能存在滞后，建议以各公司最新公告为准<br />
        整理日期：2026-06-13
      </p>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={styles.section}>
      <div style={styles.sectionHeader}>{title}</div>
      {children}
    </div>
  );
}
