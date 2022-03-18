<script>
    import DataTable, {Head, Body, Row, Cell} from '@smui/data-table'
    import LinearProgress from '@smui/linear-progress'

    let loaded = true
</script>

<DataTable>
    <Head>
        <Row>
            <Cell>ID</Cell>
            <Cell>OOO</Cell>
            <Cell>AA</Cell>
            <Cell>BB</Cell>
        </Row>
    </Head>
    <Body>
        <Row>
            <Cell contenteditable>ID</Cell>
            <Cell>OOO</Cell>
            <Cell>AA</Cell>
            <Cell>BB</Cell>
        </Row>
    </Body>
</DataTable>