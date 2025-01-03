import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import "katex/dist/katex.min.css";
import "./globals.css";
import { MDXProvider } from '@mdx-js/react';
import { Table } from '@/components/Table';
import ChartComponent from '@/components/ChartComponent';
import FileTreeViewer from '@/components/FileTreeViewer';
import Mermaid from '@/components/Mermaid';
import {
    Surface, Layer, Legend, DefaultLegendContent, Tooltip, DefaultTooltipContent, ResponsiveContainer,
    Cell, Text, Label, LabelList, Customized, Sector, Curve, Rectangle, Polygon, Dot, Cross, Symbols, PolarGrid,
    PolarRadiusAxis, PolarAngleAxis, Pie, Radar, RadialBar, Brush, ReferenceLine, ReferenceDot, ReferenceArea,
    CartesianAxis, CartesianGrid, Line, Area, Bar, Scatter, XAxis, YAxis, ZAxis, ErrorBar, LineChart, BarChart,
    PieChart, Treemap, Sankey, RadarChart, ScatterChart, AreaChart, RadialBarChart, ComposedChart, SunburstChart,
    Funnel, FunnelChart, Trapezoid,
} from 'recharts';

// for static mdx rendering we need to pass all of the components explicitly since import is not available in MDX

const mdxComponents = {
  Table, ChartComponent, FileTreeViewer, Mermaid,
  // recharts
  Surface, Layer, Legend, DefaultLegendContent, Tooltip, DefaultTooltipContent, ResponsiveContainer,
  Cell, Text, Label, LabelList, Customized, Sector, Curve, Rectangle, Polygon, Dot, Cross, Symbols, PolarGrid,
  PolarRadiusAxis, PolarAngleAxis, Pie, Radar, RadialBar, Brush, ReferenceLine, ReferenceDot, ReferenceArea,
  CartesianAxis, CartesianGrid, Line, Area, Bar, Scatter, XAxis, YAxis, ZAxis, ErrorBar, LineChart, BarChart,
  PieChart, Treemap, Sankey, RadarChart, ScatterChart, AreaChart, RadialBarChart, ComposedChart, SunburstChart,
  Funnel, FunnelChart, Trapezoid,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={mdxComponents}>
      <Layout sections={pageProps.sections || []} currentSection={pageProps.currentSection} isSinglePage={pageProps.isSinglePage} >
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  );
}
