import React from 'react'
import { context, scenario as scenarioFn } from 'tessereact'
import { Button, ButtonToolbar, Modal, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap'

const scenario = (name, fn) => scenarioFn(name, fn, {css: true, screenshot: true})

context('Overlays: Modals', () => {
  scenario('Static markup', () =>
    <div className='static-modal'>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          One fine body...
        </Modal.Body>

        <Modal.Footer>
          <Button>Close</Button>
          <Button bsStyle='primary'>Save changes</Button>
        </Modal.Footer>

      </Modal.Dialog>
    </div>
  )

  scenario('Basic example', class ModalExample extends React.Component {
    constructor (props, context) {
      super(props, context)
      this.state = { showModal: false }
    }

    close = () => {
      this.setState({ showModal: false })
    }

    open = () => {
      this.setState({ showModal: true })
    }

    render () {
      const popover = (
        <Popover id='modal-popover' title='popover'>
          very popover. such engagement
        </Popover>
      )
      const tooltip = (
        <Tooltip id='modal-tooltip'>
          wow.
        </Tooltip>
      )

      return (
        <div>
          <p>Click to get the full Modal experience!</p>

          <Button
            bsStyle='primary'
            bsSize='large'
            onClick={this.open}
          >
            Launch demo modal
          </Button>

          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Text in a modal</h4>
              <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

              <h4>Popover in a modal</h4>
              <p>there is a <OverlayTrigger overlay={popover}><a href='#'>popover</a></OverlayTrigger> here</p>

              <h4>Tooltips in a modal</h4>
              <p>there is a <OverlayTrigger overlay={tooltip}><a href='#'>tooltip</a></OverlayTrigger> here</p>

              <hr />

              <h4>Overflowing text to show scroll behavior</h4>
              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      )
    }
  })

  scenario('Contained modal', class Trigger extends React.Component {
    constructor (props, context) {
      super(props, context)
      this.state = { show: false }
    }

    render () {
      const close = () => this.setState({ show: false})

      return (
        <div className='modal-container' style={{height: 200}}>
          <Button
            bsStyle='primary'
            bsSize='large'
            onClick={() => this.setState({ show: true})}
          >
            Launch contained modal
          </Button>

          <Modal
            show={this.state.show}
            onHide={close}
            container={this}
            aria-labelledby='contained-modal-title'
          >
            <Modal.Header closeButton>
              <Modal.Title id='contained-modal-title'>Contained Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={close}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      )
    }
  })

  scenario('Sizing modals using custom CSS', class ModalCustomSizingExample extends React.Component {
    constructor (props, context) {
      super(props, context)
      this.state = { show: false }
    }

    showModal = () => {
      this.setState({show: true})
    }

    hideModal = () => {
      this.setState({show: false})
    }

    render () {
      return (
        <ButtonToolbar>
          <Button bsStyle='primary' onClick={this.showModal}>
            Launch demo modal
          </Button>

          <Modal
            {...this.props}
            show={this.state.show}
            onHide={this.hideModal}
            dialogClassName='custom-modal'
          >
            <Modal.Header closeButton>
              <Modal.Title id='contained-modal-title-lg'>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Wrapped Text</h4>
              <p>Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
               Mollitia reiciendis porro quo magni incidunt dolore amet atque facilis ipsum deleniti rem! Dolores debitis voluptatibus ipsum dicta. Dolor quod amet ab sint esse distinctio tenetur. Veritatis laudantium quibusdam quidem corporis architecto veritatis. Ex facilis minima beatae sunt perspiciatis placeat. Quasi corporis
               odio eaque voluptatibus ratione magnam nulla? Amet cum maiores consequuntur totam dicta! Inventore adipisicing vel vero odio modi doloremque? Vitae porro impedit ea minima laboriosam quisquam neque. Perspiciatis omnis obcaecati consequatur sunt deleniti similique facilis sequi. Ipsum harum vitae modi reiciendis officiis.
               Quas laudantium laudantium modi corporis nihil provident consectetur omnis, natus nulla distinctio illum corporis. Sit ex earum odio ratione consequatur odit minus laborum? Eos? Sit ipsum illum architecto aspernatur perspiciatis error fuga illum, tempora harum earum, a dolores. Animi facilis inventore harum dolore accusamus
               fuga provident molestiae eum! Odit dicta error dolorem sunt reprehenderit. Sit similique iure quae obcaecati harum. Eum saepe fugit magnam dicta aliquam? Sapiente possimus aliquam fugiat officia culpa sint! Beatae voluptates voluptatem excepturi molestiae alias in tenetur beatae placeat architecto. Sit possimus rerum
               fugiat sapiente aspernatur. Necessitatibus tempora animi dicta perspiciatis tempora a velit in! Doloribus perspiciatis doloribus suscipit nam earum. Deleniti veritatis eaque totam assumenda fuga sapiente! Id recusandae. Consectetur necessitatibus eaque velit nobis aliquid? Fugit illum qui suscipit aspernatur alias ipsum
               repudiandae! Quia omnis quisquam dignissimos a mollitia. Suscipit aspernatur eum maiores repellendus ipsum doloribus alias voluptatum consequatur. Consectetur quibusdam veniam quas tenetur necessitatibus repudiandae? Rem optio vel alias neque optio sapiente quidem similique reiciendis tempore. Illum accusamus officia
               cum enim minima eligendi consectetur nemo veritatis nam nisi! Adipisicing nobis perspiciatis dolorum adipisci soluta architecto doloremque voluptatibus omnis debitis quas repellendus. Consequuntur assumenda illum commodi mollitia asperiores? Quis aspernatur consequatur modi veritatis aliquid at? Atque vel iure quos.
               Amet provident voluptatem amet aliquam deserunt sint, elit dolorem ipsa, voluptas? Quos esse facilis neque nihil sequi non? Voluptates rem ab quae dicta culpa dolorum sed atque molestias debitis omnis! Sit sint repellendus deleniti officiis distinctio. Impedit vel quos harum doloribus corporis. Laborum ullam nemo quaerat
               reiciendis recusandae minima dicta molestias rerum. Voluptas et ut omnis est ipsum accusamus harum. Amet exercitationem quasi velit inventore neque doloremque! Consequatur neque dolorem vel impedit sunt voluptate. Amet quo amet magni exercitationem libero recusandae possimus pariatur. Cumque eum blanditiis vel vitae
               distinctio! Tempora! Consectetur sit eligendi neque sunt soluta laudantium natus qui aperiam quisquam consectetur consequatur sit sint a unde et. At voluptas ut officiis esse totam quasi dolorem! Hic deserunt doloribus repudiandae! Lorem quod ab nostrum asperiores aliquam ab id consequatur, expedita? Tempora quaerat
               ex ea temporibus in tempore voluptates cumque. Quidem nam dolor reiciendis qui dolor assumenda ipsam veritatis quasi. Esse! Sit consectetur hic et sunt iste! Accusantium atque elit voluptate asperiores corrupti temporibus mollitia! Placeat soluta odio ad blanditiis nisi. Eius reiciendis id quos dolorum eaque suscipit
               magni delectus maxime. Sit odit provident vel magnam quod. Possimus eligendi non corrupti tenetur culpa accusantium quod quis. Voluptatum quaerat animi dolore maiores molestias voluptate? Necessitatibus illo omnis laborum hic enim minima! Similique. Dolor voluptatum reprehenderit nihil adipisci aperiam voluptatem soluta
               magnam accusamus iste incidunt tempore consequatur illo illo odit. Asperiores nesciunt iusto nemo animi ratione. Sunt odit similique doloribus temporibus reiciendis! Ullam. Dolor dolores veniam animi sequi dolores molestias voluptatem iure velit. Elit dolore quaerat incidunt enim aut distinctio. Ratione molestiae laboriosam
               similique laboriosam eum et nemo expedita. Consequuntur perspiciatis cumque dolorem.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.hideModal}>Close</Button>
            </Modal.Footer>
          </Modal>
        </ButtonToolbar>
      )
    }
  })

  scenario('Sizing modals using standard Bootstrap props', () => {
    class MySmallModal extends React.Component {
      render () {
        return (
          <Modal {...this.props} bsSize='small' aria-labelledby='contained-modal-title-sm'>
            <Modal.Header closeButton>
              <Modal.Title id='contained-modal-title-sm'>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Wrapped Text</h4>
              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        )
      }
    }

    class MyLargeModal extends React.Component {
      render () {
        return (
          <Modal {...this.props} bsSize='large' aria-labelledby='contained-modal-title-lg'>
            <Modal.Header closeButton>
              <Modal.Title id='contained-modal-title-lg'>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Wrapped Text</h4>
              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        )
      }
    }

    class App extends React.Component {
      constructor (props, context) {
        super(props, context)
        this.state = { smShow: false, lgShow: false }
      }

      render () {
        let smClose = () => this.setState({ smShow: false })
        let lgClose = () => this.setState({ lgShow: false })

        return (
          <ButtonToolbar>
            <Button bsStyle='primary' onClick={() => this.setState({ smShow: true })}>
              Launch small demo modal
            </Button>
            <Button bsStyle='primary' onClick={() => this.setState({ lgShow: true })}>
              Launch large demo modal
            </Button>

            <MySmallModal show={this.state.smShow} onHide={smClose} />
            <MyLargeModal show={this.state.lgShow} onHide={lgClose} />
          </ButtonToolbar>
        )
      }
    }

    return <App />
  })
})
