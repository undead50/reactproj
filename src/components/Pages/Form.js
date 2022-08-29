import React from 'react'

export default function Form() {
  return (
    <div><div className="card card-danger">
    <div className="card-header">
      <h3 className="card-title">Input masks</h3>
    </div>
    <div className="card-body">
      {/* Date dd/mm/yyyy */}
      <div className="form-group">
        <label>Date masks:</label>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="far fa-calendar-alt" /></span>
          </div>
          <input type="text" className="form-control" data-inputmask-alias="datetime" data-inputmask-inputformat="dd/mm/yyyy" data-mask inputMode="numeric" />
        </div>
        {/* /.input group */}
      </div>
      {/* /.form group */}
      {/* Date mm/dd/yyyy */}
      <div className="form-group">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="far fa-calendar-alt" /></span>
          </div>
          <input type="text" className="form-control" data-inputmask-alias="datetime" data-inputmask-inputformat="mm/dd/yyyy" data-mask inputMode="numeric" />
        </div>
        {/* /.input group */}
      </div>
      {/* /.form group */}
      {/* phone mask */}
      <div className="form-group">
        <label>US phone mask:</label>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fas fa-phone" /></span>
          </div>
          <input type="text" className="form-control" data-inputmask="&quot;mask&quot;: &quot;(999) 999-9999&quot;" data-mask inputMode="text" />
        </div>
        {/* /.input group */}
      </div>
      {/* /.form group */}
      {/* phone mask */}
      <div className="form-group">
        <label>Intl US phone mask:</label>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fas fa-phone" /></span>
          </div>
          <input type="text" className="form-control" data-inputmask="'mask': ['999-999-9999 [x99999]', '+099 99 99 9999[9]-9999']" data-mask inputMode="text" />
        </div>
        {/* /.input group */}
      </div>
      {/* /.form group */}
      {/* IP mask */}
      <div className="form-group">
        <label>IP mask:</label>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fas fa-laptop" /></span>
          </div>
          <input type="text" className="form-control" data-inputmask="'alias': 'ip'" data-mask inputMode="decimal" />
        </div>
        {/* /.input group */}
      </div>
      {/* /.form group */}
    </div>
    {/* /.card-body */}
  </div></div>

  )
}
