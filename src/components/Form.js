import React from 'react'

class Form extends React.Component {
  render() {
    let { form } = this.props
    return (
      <div>
        <form>
          <div className="input">
            <label>Source URL:</label>
            <input name="sourceURL" type="text" value={form.sourceURL} onChange={this.props.onFormUpdates} placeholder = "sourceURL"/>
          </div>

          <div className="input">
            <label>Salutation:</label>
            <input name="salutation" type="text" value={form.salutation} onChange={this.props.onFormUpdates} placeholder = "salutation"/>
        </div>

        <div className="input">
          <label>Company Name</label>
          <input name="company" type="text" value={form.company} onChange={this.props.onFormUpdates} placeholder = "company"/>
        </div>

      <div className="input">
        <label>Position Title:</label>
        <input name="positionTitle" type="text" value={form.positionTitle} onChange={this.props.onFormUpdates} placeholder = "positionTitle"/>
      </div>

      <div className="input">
        <label>Position Type</label>
        <select value={form.positionType} onChange={this.props.onFormUpdates}>
          <option value="fullstack">Full Stack</option>
          <option value="frontend">Front End</option>
          <option value="backend">Back End</option>
        </select>
      </div>

      <hr />

      <div className="input">

      <div className="skills">
        <label>Rails:
          <input
            name="rails"
            type="checkbox"
            checked={form.rails}
            onChange={this.props.onFormUpdates} />
        </label>
      </div>

      <div className="skills">
        <label>Javascript:
          <input
            name="javascript"
            type="checkbox"
            checked={form.javascript}
            onChange={this.props.onFormUpdates} />
        </label>
      </div>

      <div className="skills">
        <label>React:
          <input
            name="react"
            type="checkbox"
            checked={form.react}
            onChange={this.props.onFormUpdates} />
        </label>
      </div>

      <div className="skills">
        <label>Redux:
          <input
            name="redux"
            type="checkbox"
            checked={form.redux}
            onChange={this.props.onFormUpdates} />
        </label>
      </div>



      <div className="skills">
        <label>CSS:
          <input
            name="css"
            type="checkbox"
            checked={form.css}
            onChange={this.props.onFormUpdates} />
        </label>
      </div>

      <div className="skills">
        <label>PostgreSQL:
          <input
            name="postgreSQL"
            type="checkbox"
            checked={form.postgreSQL}
            onChange={this.props.onFormUpdates} />
        </label>
      </div>

      <div className="skills">
        <label>Rest API:
          <input
            name="restfulAPI"
            type="checkbox"
            checked={form.restfulAPI}
            onChange={this.props.onFormUpdates} />
        </label>
      </div>

    </div>

    <hr />

      <div className="input">
        <label>Angel List Post?
          <input
            name="isAngelListPost"
            type="checkbox"
            checked={form.isAngelListPost}
            onChange={this.props.onFormUpdates} />
        </label>
      </div>

      <div className="input">
        <label>Note About Company:</label>
        <br />
    <textarea name="specificCompanyNote" value={form.specificCompanyNote} onChange={this.props.onFormUpdates} placeholder = "specificCompanyNote" />



    </div>



    </form>
  </div>
    )
  }
}

export default Form
