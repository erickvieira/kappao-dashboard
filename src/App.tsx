import {
  mdiAccountGroup,
  mdiArrowLeftRightBold,
  mdiCalendarSync,
  mdiCalendarToday,
  mdiCart,
  mdiChartAreaspline,
  mdiChevronDown,
  mdiDolly,
  mdiEye,
  mdiGoogleSpreadsheet,
  mdiListStatus,
  mdiMenu,
  mdiMenuOpen,
  mdiMessageBulleted,
  mdiPackageVariantClosed,
  mdiPalette,
  mdiPlusThick,
  mdiPrinter,
  mdiTable,
  mdiTagMultiple,
  mdiViewDashboardVariant,
} from "@mdi/js";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Form,
  Input,
  Layout,
  Menu,
  Row,
  Space,
} from "antd";
import Avatar from "antd/lib/avatar/avatar";
import Image from "components/Image";
import MaterialIcon from "components/MaterialIcon";
import { useEffect, useState } from "react";

const COLLAPSED_WIDTH = 80;
const UNCOLLAPSED_WIDTH = 200;
const COLLAPSE_ANIMATION = "all 0.2s linear";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [breaked, setBreacked] = useState(false);
  const [logoSrc, setLogoSrc] = useState<"logo" | "avatar">(
    collapsed ? "avatar" : "logo"
  );

  useEffect(() => {
    setTimeout(
      () => setLogoSrc(collapsed ? "avatar" : "logo"),
      collapsed ? 200 : 100
    );
  }, [collapsed]);

  return (
    <Layout style={{ height: "100%" }}>
      <Layout.Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          height: "100%",
          position: "fixed",
          zIndex: 2,
          left: 0,
          overflow: "auto",
          overflowX: "hidden",
          transition: COLLAPSE_ANIMATION,
        }}
        breakpoint="lg"
        onBreakpoint={(breaked) => {
          setBreacked(breaked);
          setCollapsed(breaked);
        }}
        collapsedWidth={breaked ? 0 : COLLAPSED_WIDTH}
      >
        <Menu
          theme="light"
          mode="vertical"
          defaultSelectedKeys={["4"]}
          style={{
            transition: COLLAPSE_ANIMATION,
            marginTop: 64,
          }}
          siderCollapsed={collapsed}
          collapsedWidth={COLLAPSED_WIDTH}
        >
          <Menu.Item
            key="1"
            icon={<MaterialIcon path={mdiViewDashboardVariant} />}
          >
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<MaterialIcon path={mdiTable} />}>
            Tabela semanal
          </Menu.Item>
          <Menu.Item key="3" icon={<MaterialIcon path={mdiCalendarToday} />}>
            Pedidos do dia
          </Menu.Item>
          <Menu.Item key="4" icon={<MaterialIcon path={mdiMessageBulleted} />}>
            Pedidos
          </Menu.Item>
          <Menu.Item key="5" icon={<MaterialIcon path={mdiCalendarSync} />}>
            Programação
          </Menu.Item>
          <Menu.Item
            key="6"
            icon={<MaterialIcon path={mdiGoogleSpreadsheet} />}
          >
            Planilhas
          </Menu.Item>
          <Menu.Item key="7" icon={<MaterialIcon path={mdiChartAreaspline} />}>
            Resultados
          </Menu.Item>
          <Menu.Item key="8" icon={<MaterialIcon path={mdiListStatus} />}>
            Status
          </Menu.Item>
          <Menu.Item key="9" icon={<MaterialIcon path={mdiCart} />}>
            Produtos
          </Menu.Item>
          <Menu.Item key="10" icon={<MaterialIcon path={mdiDolly} />}>
            Matérias primas
          </Menu.Item>
          <Menu.Item
            key="11"
            icon={<MaterialIcon path={mdiPackageVariantClosed} />}
          >
            Inventários
          </Menu.Item>
          <Menu.Item key="12" icon={<MaterialIcon path={mdiTagMultiple} />}>
            Marcas
          </Menu.Item>
          <Menu.Item key="13" icon={<MaterialIcon path={mdiPalette} />}>
            Cores
          </Menu.Item>
          <Menu.Item key="14" icon={<MaterialIcon path={mdiAccountGroup} />}>
            Usuários
          </Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout.Header
        style={{
          padding: 0,
          paddingRight: 16,
          paddingLeft: breaked ? 16 : 0,
          position: "fixed",
          right: 0,
          zIndex: 2,
          transition: COLLAPSE_ANIMATION,
          width: `100%`,
          background: "var(--primary-color)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 0 16px 0 #3336",
        }}
      >
        {breaked ? (
          <Button
            icon={<MaterialIcon path={mdiMenu} />}
            shape="circle"
            size="large"
            type="text"
            onClick={() => setCollapsed((collapsed) => !collapsed)}
          />
        ) : (
          <Space style={{ overflow: "hidden", height: 64, padding: "16px 0" }}>
            <Image
              src={`assets/${logoSrc}.png`}
              alt="Logomarca"
              style={{
                width: collapsed ? COLLAPSED_WIDTH : UNCOLLAPSED_WIDTH,
                maxHeight: "100%",
                transition: COLLAPSE_ANIMATION,
              }}
            />
            <Button
              icon={
                <MaterialIcon
                  path={mdiMenuOpen}
                  rotate={collapsed ? 180 : undefined}
                />
              }
              shape="circle"
              size="large"
              type="text"
              onClick={() => setCollapsed((collapsed) => !collapsed)}
            />
          </Space>
        )}
        <Avatar
          src={`${process.env.PUBLIC_URL}/assets/placeholders/avatar.png`}
        />
      </Layout.Header>
      <Layout.Content
        style={{
          marginTop: 64,
          marginLeft: breaked
            ? 0
            : collapsed
            ? COLLAPSED_WIDTH
            : UNCOLLAPSED_WIDTH,
          padding: 24,
          transition: COLLAPSE_ANIMATION,
          background: "var(--background-color)",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        {breaked && !collapsed && (
          <div
            style={{
              zIndex: 1,
              height: "100%",
              width: "100%",
              position: "absolute",
              top: 64,
              left: 0,
              background: "#0005",
            }}
            onClick={() => setCollapsed(true)}
          />
        )}
        <Space direction="vertical" style={{ width: "100%" }}>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Pedidos</Breadcrumb.Item>
          </Breadcrumb>
          <Card
            bordered={false}
            style={{ boxShadow: "0 4px 8px 0 #ccc5" }}
            title={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Form layout="inline" style={{ flex: 1, maxWidth: 512 }}>
                  <Form.Item style={{ flex: 1 }}>
                    <Input.Search placeholder="Buscar pedido" />
                  </Form.Item>
                </Form>
                <Button
                  type="primary"
                  icon={<MaterialIcon path={mdiPlusThick} />}
                >
                  Novo pedido
                </Button>
              </div>
            }
          >
            <ul className="default-list zebra">
              <li style={{ padding: "0 12px" }}>
                <Row>
                  <Col span={2} style={{ cursor: "pointer" }}>
                    <small>ID</small>
                    <MaterialIcon path={mdiArrowLeftRightBold} rotate={90} />
                  </Col>
                  <Col span={4} style={{ cursor: "pointer" }}>
                    <small>Cliente</small>
                    <MaterialIcon path={mdiArrowLeftRightBold} rotate={90} />
                  </Col>
                  <Col span={4} style={{ cursor: "pointer" }}>
                    <small>Cidade</small>
                    <MaterialIcon path={mdiArrowLeftRightBold} rotate={90} />
                  </Col>
                  <Col span={3} style={{ cursor: "pointer" }}>
                    <small>Dt. Pedido</small>
                    <MaterialIcon path={mdiArrowLeftRightBold} rotate={90} />
                  </Col>
                  <Col span={2} style={{ cursor: "pointer" }}>
                    <small>Dt. Programada</small>
                    <MaterialIcon path={mdiArrowLeftRightBold} rotate={90} />
                  </Col>
                  <Col span={2} style={{ cursor: "pointer" }}>
                    <small>Valor</small>
                    <MaterialIcon path={mdiArrowLeftRightBold} rotate={90} />
                  </Col>
                  <Col span={3} style={{ cursor: "pointer" }}>
                    <small>Status</small>
                    <MaterialIcon path={mdiArrowLeftRightBold} rotate={90} />
                  </Col>
                </Row>
              </li>
              <li className="default-list-item">
                <Row>
                  <Col span={2}>85767</Col>
                  <Col span={4}>Adam Morgan</Col>
                  <Col span={4}>Åland Islands</Col>
                  <Col span={3}>3/10/2100</Col>
                  <Col span={2}>4/21/2053</Col>
                  <Col span={2}>R$ 12 677,21</Col>
                  <Col span={3}>Pré-produção</Col>
                  <Col span={4}>
                    <span
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button
                        type="text"
                        size="small"
                        style={{ marginRight: 8 }}
                        icon={<MaterialIcon path={mdiPrinter} />}
                      >
                        Imprimir
                        <MaterialIcon path={mdiChevronDown} />
                      </Button>
                      <Button
                        type="primary"
                        size="small"
                        icon={<MaterialIcon path={mdiEye} />}
                      />
                    </span>
                  </Col>
                </Row>
              </li>
              <li className="default-list-item">
                <Row>
                  <Col span={2}>38374</Col>
                  <Col span={4}>Jared Fleming</Col>
                  <Col span={4}>Turkmenistan</Col>
                  <Col span={3}>8/22/2119</Col>
                  <Col span={2}>10/19/2069</Col>
                  <Col span={2}>R$ 2 147,37</Col>
                  <Col span={3}>Pré-produção</Col>
                  <Col span={4}>
                    <span
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button
                        type="text"
                        size="small"
                        style={{ marginRight: 8 }}
                        icon={<MaterialIcon path={mdiPrinter} />}
                      >
                        Imprimir
                        <MaterialIcon path={mdiChevronDown} />
                      </Button>
                      <Button
                        type="primary"
                        size="small"
                        icon={<MaterialIcon path={mdiEye} />}
                      />
                    </span>
                  </Col>
                </Row>
              </li>
              <li className="default-list-item">
                <Row>
                  <Col span={2}>60655</Col>
                  <Col span={4}>Elnora McGee</Col>
                  <Col span={4}>Latvia</Col>
                  <Col span={3}>1/7/2029</Col>
                  <Col span={2}>6/27/2058</Col>
                  <Col span={2}>R$ 8 156,31</Col>
                  <Col span={3}>Pré-produção</Col>
                  <Col span={4}>
                    <span
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button
                        type="text"
                        size="small"
                        style={{ marginRight: 8 }}
                        icon={<MaterialIcon path={mdiPrinter} />}
                      >
                        Imprimir
                        <MaterialIcon path={mdiChevronDown} />
                      </Button>
                      <Button
                        type="primary"
                        size="small"
                        icon={<MaterialIcon path={mdiEye} />}
                      />
                    </span>
                  </Col>
                </Row>
              </li>
              <li className="default-list-item">
                <Row>
                  <Col span={2}>63687</Col>
                  <Col span={4}>Sean Watkins</Col>
                  <Col span={4}>Bahamas</Col>
                  <Col span={3}>12/7/2056</Col>
                  <Col span={2}>3/17/2093</Col>
                  <Col span={2}>R$ 5 931,18</Col>
                  <Col span={3}>Pré-produção</Col>
                  <Col span={4}>
                    <span
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button
                        type="text"
                        size="small"
                        style={{ marginRight: 8 }}
                        icon={<MaterialIcon path={mdiPrinter} />}
                      >
                        Imprimir
                        <MaterialIcon path={mdiChevronDown} />
                      </Button>
                      <Button
                        type="primary"
                        size="small"
                        icon={<MaterialIcon path={mdiEye} />}
                      />
                    </span>
                  </Col>
                </Row>
              </li>
              <li className="default-list-item">
                <Row>
                  <Col span={2}>38599</Col>
                  <Col span={4}>Dora Sutton</Col>
                  <Col span={4}>Croatia</Col>
                  <Col span={3}>1/19/2094</Col>
                  <Col span={2}>2/20/2071</Col>
                  <Col span={2}>R$ 6 641,40</Col>
                  <Col span={3}>Pré-produção</Col>
                  <Col span={4}>
                    <span
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button
                        type="text"
                        size="small"
                        style={{ marginRight: 8 }}
                        icon={<MaterialIcon path={mdiPrinter} />}
                      >
                        Imprimir
                        <MaterialIcon path={mdiChevronDown} />
                      </Button>
                      <Button
                        type="primary"
                        size="small"
                        icon={<MaterialIcon path={mdiEye} />}
                      />
                    </span>
                  </Col>
                </Row>
              </li>
              <li className="default-list-item">
                <Row>
                  <Col span={2}>58106</Col>
                  <Col span={4}>Teresa Evans</Col>
                  <Col span={4}>Samoa</Col>
                  <Col span={3}>9/5/2113</Col>
                  <Col span={2}>10/11/2067</Col>
                  <Col span={2}>R$ 4 302,47</Col>
                  <Col span={3}>Pré-produção</Col>
                  <Col span={4}>
                    <span
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button
                        type="text"
                        size="small"
                        style={{ marginRight: 8 }}
                        icon={<MaterialIcon path={mdiPrinter} />}
                      >
                        Imprimir
                        <MaterialIcon path={mdiChevronDown} />
                      </Button>
                      <Button
                        type="primary"
                        size="small"
                        icon={<MaterialIcon path={mdiEye} />}
                      />
                    </span>
                  </Col>
                </Row>
              </li>
              <li className="default-list-item">
                <Row>
                  <Col span={2}>96399</Col>
                  <Col span={4}>Randy Riley</Col>
                  <Col span={4}>French Guiana</Col>
                  <Col span={3}>8/2/2056</Col>
                  <Col span={2}>5/28/2083</Col>
                  <Col span={2}>R$ 12 663,44</Col>
                  <Col span={3}>Pré-produção</Col>
                  <Col span={4}>
                    <span
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button
                        type="text"
                        size="small"
                        style={{ marginRight: 8 }}
                        icon={<MaterialIcon path={mdiPrinter} />}
                      >
                        Imprimir
                        <MaterialIcon path={mdiChevronDown} />
                      </Button>
                      <Button
                        type="primary"
                        size="small"
                        icon={<MaterialIcon path={mdiEye} />}
                      />
                    </span>
                  </Col>
                </Row>
              </li>
              <li className="default-list-item">
                <Row>
                  <Col span={2}>83483</Col>
                  <Col span={4}>Jose Powers</Col>
                  <Col span={4}>Bangladesh</Col>
                  <Col span={3}>6/3/2034</Col>
                  <Col span={2}>9/16/2028</Col>
                  <Col span={2}>R$ 12 923,67</Col>
                  <Col span={3}>Pré-produção</Col>
                  <Col span={4}>
                    <span
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button
                        type="text"
                        size="small"
                        style={{ marginRight: 8 }}
                        icon={<MaterialIcon path={mdiPrinter} />}
                      >
                        Imprimir
                        <MaterialIcon path={mdiChevronDown} />
                      </Button>
                      <Button
                        type="primary"
                        size="small"
                        icon={<MaterialIcon path={mdiEye} />}
                      />
                    </span>
                  </Col>
                </Row>
              </li>
              <li className="default-list-item">
                <Row>
                  <Col span={2}>11576</Col>
                  <Col span={4}>Russell Doyle</Col>
                  <Col span={4}>Faroe Islands</Col>
                  <Col span={3}>10/5/2093</Col>
                  <Col span={2}>2/11/2096</Col>
                  <Col span={2}>R$ 8 506,44</Col>
                  <Col span={3}>Pré-produção</Col>
                  <Col span={4}>
                    <span
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button
                        type="text"
                        size="small"
                        style={{ marginRight: 8 }}
                        icon={<MaterialIcon path={mdiPrinter} />}
                      >
                        Imprimir
                        <MaterialIcon path={mdiChevronDown} />
                      </Button>
                      <Button
                        type="primary"
                        size="small"
                        icon={<MaterialIcon path={mdiEye} />}
                      />
                    </span>
                  </Col>
                </Row>
              </li>
              <li className="default-list-item">
                <Row>
                  <Col span={2}>51578</Col>
                  <Col span={4}>Brian Figueroa</Col>
                  <Col span={4}>Libya</Col>
                  <Col span={3}>3/16/2079</Col>
                  <Col span={2}>2/1/2109</Col>
                  <Col span={2}>R$ 9 357,57</Col>
                  <Col span={3}>Pré-produção</Col>
                  <Col span={4}>
                    <span
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button
                        type="text"
                        size="small"
                        style={{ marginRight: 8 }}
                        icon={<MaterialIcon path={mdiPrinter} />}
                      >
                        Imprimir
                        <MaterialIcon path={mdiChevronDown} />
                      </Button>
                      <Button
                        type="primary"
                        size="small"
                        icon={<MaterialIcon path={mdiEye} />}
                      />
                    </span>
                  </Col>
                </Row>
              </li>
              <li className="default-list-item">
                <Row>
                  <Col span={2}>12794</Col>
                  <Col span={4}>Essie Myers</Col>
                  <Col span={4}>Congo - Kinshasa</Col>
                  <Col span={3}>10/5/2080</Col>
                  <Col span={2}>9/8/2107</Col>
                  <Col span={2}>R$ 2 278,14</Col>
                  <Col span={3}>Pré-produção</Col>
                  <Col span={4}>
                    <span
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button
                        type="text"
                        size="small"
                        style={{ marginRight: 8 }}
                        icon={<MaterialIcon path={mdiPrinter} />}
                      >
                        Imprimir
                        <MaterialIcon path={mdiChevronDown} />
                      </Button>
                      <Button
                        type="primary"
                        size="small"
                        icon={<MaterialIcon path={mdiEye} />}
                      />
                    </span>
                  </Col>
                </Row>
              </li>
              <li className="default-list-item">
                <Row>
                  <Col span={2}>38874</Col>
                  <Col span={4}>Edward Singleton</Col>
                  <Col span={4}>Ghana</Col>
                  <Col span={3}>5/9/2074</Col>
                  <Col span={2}>2/18/2059</Col>
                  <Col span={2}>R$ 7 790,34</Col>
                  <Col span={3}>Pré-produção</Col>
                  <Col span={4}>
                    <span
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button
                        type="text"
                        size="small"
                        style={{ marginRight: 8 }}
                        icon={<MaterialIcon path={mdiPrinter} />}
                      >
                        Imprimir
                        <MaterialIcon path={mdiChevronDown} />
                      </Button>
                      <Button
                        type="primary"
                        size="small"
                        icon={<MaterialIcon path={mdiEye} />}
                      />
                    </span>
                  </Col>
                </Row>
              </li>
              <li className="default-list-item">
                <Row>
                  <Col span={2}>91760</Col>
                  <Col span={4}>Craig Simmons</Col>
                  <Col span={4}>Switzerland</Col>
                  <Col span={3}>5/1/2104</Col>
                  <Col span={2}>2/10/2088</Col>
                  <Col span={2}>R$ 10 847,25</Col>
                  <Col span={3}>Pré-produção</Col>
                  <Col span={4}>
                    <span
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button
                        type="text"
                        size="small"
                        style={{ marginRight: 8 }}
                        icon={<MaterialIcon path={mdiPrinter} />}
                      >
                        Imprimir
                        <MaterialIcon path={mdiChevronDown} />
                      </Button>
                      <Button
                        type="primary"
                        size="small"
                        icon={<MaterialIcon path={mdiEye} />}
                      />
                    </span>
                  </Col>
                </Row>
              </li>
              <li className="default-list-item">
                <Row>
                  <Col span={2}>63917</Col>
                  <Col span={4}>Ian Watkins</Col>
                  <Col span={4}>American Samoa</Col>
                  <Col span={3}>4/25/2037</Col>
                  <Col span={2}>3/25/2093</Col>
                  <Col span={2}>R$ 2 472,21</Col>
                  <Col span={3}>Pré-produção</Col>
                  <Col span={4}>
                    <span
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button
                        type="text"
                        size="small"
                        style={{ marginRight: 8 }}
                        icon={<MaterialIcon path={mdiPrinter} />}
                      >
                        Imprimir
                        <MaterialIcon path={mdiChevronDown} />
                      </Button>
                      <Button
                        type="primary"
                        size="small"
                        icon={<MaterialIcon path={mdiEye} />}
                      />
                    </span>
                  </Col>
                </Row>
              </li>
              <li className="default-list-item">
                <Row>
                  <Col span={2}>84038</Col>
                  <Col span={4}>Josephine Scott</Col>
                  <Col span={4}>Chile</Col>
                  <Col span={3}>7/11/2070</Col>
                  <Col span={2}>10/3/2026</Col>
                  <Col span={2}>R$ 5 296,29</Col>
                  <Col span={3}>Pré-produção</Col>
                  <Col span={4}>
                    <span
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button
                        type="text"
                        size="small"
                        style={{ marginRight: 8 }}
                        icon={<MaterialIcon path={mdiPrinter} />}
                      >
                        Imprimir
                        <MaterialIcon path={mdiChevronDown} />
                      </Button>
                      <Button
                        type="primary"
                        size="small"
                        icon={<MaterialIcon path={mdiEye} />}
                      />
                    </span>
                  </Col>
                </Row>
              </li>
              <li className="default-list-item">
                <Row>
                  <Col span={2}>37051</Col>
                  <Col span={4}>Beulah Edwards</Col>
                  <Col span={4}>Romania</Col>
                  <Col span={3}>10/30/2078</Col>
                  <Col span={2}>10/17/2027</Col>
                  <Col span={2}>R$ 7 805,45</Col>
                  <Col span={3}>Pré-produção</Col>
                  <Col span={4}>
                    <span
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button
                        type="text"
                        size="small"
                        style={{ marginRight: 8 }}
                        icon={<MaterialIcon path={mdiPrinter} />}
                      >
                        Imprimir
                        <MaterialIcon path={mdiChevronDown} />
                      </Button>
                      <Button
                        type="primary"
                        size="small"
                        icon={<MaterialIcon path={mdiEye} />}
                      />
                    </span>
                  </Col>
                </Row>
              </li>
              <li className="default-list-item">
                <Row>
                  <Col span={2}>49710</Col>
                  <Col span={4}>Essie Moss</Col>
                  <Col span={4}>Montenegro</Col>
                  <Col span={3}>6/12/2040</Col>
                  <Col span={2}>8/21/2037</Col>
                  <Col span={2}>R$ 4 550,16</Col>
                  <Col span={3}>Pré-produção</Col>
                  <Col span={4}>
                    <span
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button
                        type="text"
                        size="small"
                        style={{ marginRight: 8 }}
                        icon={<MaterialIcon path={mdiPrinter} />}
                      >
                        Imprimir
                        <MaterialIcon path={mdiChevronDown} />
                      </Button>
                      <Button
                        type="primary"
                        size="small"
                        icon={<MaterialIcon path={mdiEye} />}
                      />
                    </span>
                  </Col>
                </Row>
              </li>
              <li className="default-list-item">
                <Row>
                  <Col span={2}>40492</Col>
                  <Col span={4}>Kate Walsh</Col>
                  <Col span={4}>Pitcairn Islands</Col>
                  <Col span={3}>10/24/2089</Col>
                  <Col span={2}>2/16/2029</Col>
                  <Col span={2}>R$ 2 700,18</Col>
                  <Col span={3}>Pré-produção</Col>
                  <Col span={4}>
                    <span
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button
                        type="text"
                        size="small"
                        style={{ marginRight: 8 }}
                        icon={<MaterialIcon path={mdiPrinter} />}
                      >
                        Imprimir
                        <MaterialIcon path={mdiChevronDown} />
                      </Button>
                      <Button
                        type="primary"
                        size="small"
                        icon={<MaterialIcon path={mdiEye} />}
                      />
                    </span>
                  </Col>
                </Row>
              </li>
              <li className="default-list-item">
                <Row>
                  <Col span={2}>45576</Col>
                  <Col span={4}>Don Lane</Col>
                  <Col span={4}>Aruba</Col>
                  <Col span={3}>12/31/2092</Col>
                  <Col span={2}>8/21/2023</Col>
                  <Col span={2}>R$ 8 678,58</Col>
                  <Col span={3}>Pré-produção</Col>
                  <Col span={4}>
                    <span
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button
                        type="text"
                        size="small"
                        style={{ marginRight: 8 }}
                        icon={<MaterialIcon path={mdiPrinter} />}
                      >
                        Imprimir
                        <MaterialIcon path={mdiChevronDown} />
                      </Button>
                      <Button
                        type="primary"
                        size="small"
                        icon={<MaterialIcon path={mdiEye} />}
                      />
                    </span>
                  </Col>
                </Row>
              </li>
              <li className="default-list-item">
                <Row>
                  <Col span={2}>54430</Col>
                  <Col span={4}>Mable Woods</Col>
                  <Col span={4}>Kazakhstan</Col>
                  <Col span={3}>5/9/2121</Col>
                  <Col span={2}>7/7/2093</Col>
                  <Col span={2}>R$ 6 741,67</Col>
                  <Col span={3}>Pré-produção</Col>
                  <Col span={4}>
                    <span
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button
                        type="text"
                        size="small"
                        style={{ marginRight: 8 }}
                        icon={<MaterialIcon path={mdiPrinter} />}
                      >
                        Imprimir
                        <MaterialIcon path={mdiChevronDown} />
                      </Button>
                      <Button
                        type="primary"
                        size="small"
                        icon={<MaterialIcon path={mdiEye} />}
                      />
                    </span>
                  </Col>
                </Row>
              </li>
            </ul>
          </Card>
        </Space>
      </Layout.Content>
    </Layout>
  );
}

export default App;
