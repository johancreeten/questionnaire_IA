.checkbox-label {
  display: flex;
  align-items: center;
  gap: 14px;
  background: #f3f8fd;
  border: 2px solid #d1dbe8;
  border-radius: 10px;
  padding: 18px 16px;
  margin-bottom: 22px;
  font-size: 1.08em;
  cursor: pointer;
  transition: background 0.18s, border 0.18s;
}

.checkbox-label:hover {
  background: #e7f0fa;
  border-color: #5d7be9;
}

.checkbox-custom {
  appearance: none;
  width: 28px;
  height: 28px;
  border: 2.5px solid #c2d1ef;
  border-radius: 7px;
  background: #fff;
  transition: border 0.13s;
  margin-right: 6px;
  cursor: pointer;
  position: relative;
}
.checkbox-custom:checked {
  border-color: #3949ab;
  background: #dbeafe;
}
.checkbox-custom:checked::after {
  content: '✔';
  color: #3949ab;
  position: absolute;
  font-size: 1.3em;
  left: 4px;
  top: 0px;
}
